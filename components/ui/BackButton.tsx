"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  fallbackHref?: string;
  className?: string;
}

export function BackButton({
  label = "Back to Previous Page",
  fallbackHref = "/",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5E8ED] hover:border-[#CBD5E1] text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-colors shadow-2xs cursor-pointer group active:scale-95 ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft className="w-3.5 h-3.5 text-[#64748B] group-hover:-translate-x-0.5 transition-transform" />
      <span>{label}</span>
    </button>
  );
}
