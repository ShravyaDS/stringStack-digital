/**
 * Google Apps Script - Automated Lead Capture to Google Sheets for SprintStack.digital
 * 
 * ==============================================================================
 * STEP-BY-STEP DEPLOYMENT INSTRUCTIONS:
 * ==============================================================================
 * 1. Open your Google Sheet.
 * 2. Click "Extensions" > "Apps Script" in the top menu.
 * 3. Delete any existing code in the editor, and paste this entire code.
 * 4. Click the "Save" 💾 icon (or Ctrl+S / Cmd+S).
 * 5. Click "Deploy" (top right blue button) > "New deployment".
 * 6. Click the gear ⚙️ icon next to "Select type" and choose "Web app".
 * 7. Configure:
 *    - Description: "SprintStack Lead Webhook v2"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone"  <-- CRITICAL! Must be "Anyone", NOT "Only myself"
 * 8. Click "Deploy" and click "Authorize access" (choose your Google account -> click Advanced -> Go to Untitled project (unsafe) -> Allow).
 * 9. Copy the "Web app URL" (looks like: https://script.google.com/macros/s/AKfycb.../exec).
 * 10. Paste the new URL or Deployment ID here.
 */

// 1. Handles browser testing & GET requests
function doGet(e) {
  // If query parameters are passed, save as a lead!
  if (e && e.parameter && (e.parameter.fullName || e.parameter.name || e.parameter.email)) {
    return handleLeadData({
      timestamp: new Date().toISOString(),
      fullName: e.parameter.fullName || e.parameter.name || "Browser Test",
      workEmail: e.parameter.workEmail || e.parameter.email || "test@example.com",
      phone: e.parameter.phone || "",
      projectFocus: e.parameter.projectFocus || e.parameter.focus || "General Discovery",
      estimatedTimeline: e.parameter.estimatedTimeline || e.parameter.timeline || "Immediate",
      projectOverview: e.parameter.projectOverview || e.parameter.requirements || "Submitted via GET test",
      source: "browser_test",
      leadId: "lead_" + new Date().getTime()
    });
  }

  // Health check response
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "SprintStack Google Sheets Webhook is LIVE and ready to receive leads!",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 2. Handles POST requests from the website
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (err) {
    // If lock fails, proceed anyway
  }

  try {
    var rawData = {};
    
    // Parse JSON or form data
    if (e && e.postData && e.postData.contents) {
      try {
        rawData = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        rawData = e.parameter || {};
      }
    } else if (e && e.parameter) {
      rawData = e.parameter;
    }

    var result = handleLeadData(rawData);
    return result;

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

// 3. Helper to insert row into Google Sheet
function handleLeadData(data) {
  var spreadsheetId = "1CIDkBuGcU741FZy_sTRkc7jjo5eihWRI7WtznkriBbE";
  var spreadsheet;
  try {
    spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  } catch (err) {
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  }

  var sheet = spreadsheet.getActiveSheet();

  // Create header row if sheet is completely empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date & Time (UTC)",
      "Full Name",
      "Work Email",
      "Phone / WhatsApp",
      "Project Focus",
      "Target Timeline",
      "Requirements / Overview",
      "Lead Source",
      "Lead ID"
    ]);

    // Format Header Row
    var headerRange = sheet.getRange(1, 1, 1, 9);
    headerRange.setBackground("#0F62FE");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }

  // Append lead row
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.fullName || data.name || "",
    data.workEmail || data.email || "",
    data.phone || "",
    data.projectFocus || data.focus || "",
    data.estimatedTimeline || data.timeline || "",
    data.projectOverview || data.requirements || "",
    data.source || "website",
    data.leadId || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success", message: "Lead added to sheet successfully" }))
    .setMimeType(ContentService.MimeType.JSON);
}
