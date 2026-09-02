"use client";

import React, { createContext, useContext, useState } from "react";
import { BookingModal } from "./BookingModal";
import { LiveDemoModal } from "./LiveDemoModal";

interface ModalContextType {
  openBookingModal: () => void;
  closeBookingModal: () => void;
  isBookingModalOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
  isDemoModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  const openDemoModal = () => setIsDemoOpen(true);
  const closeDemoModal = () => setIsDemoOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openBookingModal,
        closeBookingModal,
        isBookingModalOpen: isBookingOpen,
        openDemoModal,
        closeDemoModal,
        isDemoModalOpen: isDemoOpen,
      }}
    >
      {children}
      <BookingModal isOpen={isBookingOpen} onClose={closeBookingModal} />
      <LiveDemoModal isOpen={isDemoOpen} onClose={closeDemoModal} />
    </ModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a ModalProvider");
  }
  return context;
}
