
import React, { createContext, useContext, useState, ReactNode } from 'react';
import ContactPopup from '@/components/ContactPopup';

interface ContactPopupContextType {
  openContactPopup: (title?: string) => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

export const useContactPopup = () => {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return context;
};

interface ContactPopupProviderProps {
  children: ReactNode;
}

export const ContactPopupProvider = ({ children }: ContactPopupProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Get in Touch');

  const openContactPopup = (title?: string) => {
    setPopupTitle(title || 'Get in Touch');
    setIsOpen(true);
  };

  const closeContactPopup = () => {
    setIsOpen(false);
  };

  return (
    <ContactPopupContext.Provider value={{ openContactPopup }}>
      {children}
      <ContactPopup isOpen={isOpen} onClose={closeContactPopup} title={popupTitle} />
    </ContactPopupContext.Provider>
  );
};
