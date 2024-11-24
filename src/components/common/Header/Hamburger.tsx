"use client";
import { useState } from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  toogleMenu: () => void;
}

export default function HamburgerButton({
  isOpen = false,
  toogleMenu,
}: HamburgerButtonProps) {
  return (
    <button
      className="flex flex-col justify-between w-8 h-6 group lg:hidden"
      aria-label="Toggle menu"
      onClick={toogleMenu}
    >
      <span
        className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      ></span>
    </button>
  );
}
