import React from 'react';
import { ModalType } from './Modals';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const handleContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenModal('contact');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-end items-center select-none bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      <button
        type="button"
        onClick={handleContact}
        className="text-[21px] lg:text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0"
      >
        Get in touch
      </button>
    </header>
  );
};
