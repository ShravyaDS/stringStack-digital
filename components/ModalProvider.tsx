"use client";

import React, { createContext, useContext, useState } from "react";
import { BookingModal } from "./BookingModal";

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

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  const openDemoModal = () => setIsBookingOpen(true);
  const closeDemoModal = () => setIsBookingOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openBookingModal,
        closeBookingModal,
        isBookingModalOpen: isBookingOpen,
        openDemoModal,
        closeDemoModal,
        isDemoModalOpen: isBookingOpen,
      }}
    >
      {children}
      <BookingModal isOpen={isBookingOpen} onClose={closeBookingModal} />
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
