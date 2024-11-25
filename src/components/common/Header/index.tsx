"use client";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Logo from "./logo";
import Navigation from "./Navigation";
import HamburgerButton from "./Hamburger";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[90px] fixed bg-transparent w-full z-50">
      <Container className="flex items-center h-full justify-between">
        <Logo />
        <Navigation isOpen={isMenuOpen} />
        <HamburgerButton isOpen={isMenuOpen} toogleMenu={toggleMenu} />
      </Container>
    </header>
  );
}
