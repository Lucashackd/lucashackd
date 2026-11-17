"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, House, UserRound, Sparkles, ScrollText, Mail, type LucideIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type NavigationProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

const navItems: { href: string; label: string; sub: string; icon: LucideIcon }[] = [
  { href: "#home", label: "InÃ­cio", sub: "Entrada do reino", icon: House },
  { href: "#about", label: "Sobre mim", sub: "A origem", icon: UserRound },
  { href: "#skills", label: "Habilidades", sub: "Atributos", icon: Sparkles },
  { href: "#projects", label: "Projetos", sub: "Registros da jornada", icon: ScrollText },
  { href: "#contact", label: "Contato", sub: "Uma convocaÃ§Ã£o", icon: Mail },
];

function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href: string) => {
    onNavigate(href.replace("#", ""));
    setIsOpen(false);
  };

  return (
    <>
      <nav aria-label="NavegaÃ§Ã£o principal" className="desktop-navigation hidden md:block">
        <ul>
          {navItems.map(({ href, label, sub, icon: Icon }, index) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(event) => { event.preventDefault(); handleNavigate(href); }}
                className={"rpg-nav-item " + (activeSe¶»§q«^