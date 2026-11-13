"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, UserRound, Sparkles, ScrollText, Mail, type LucideIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type NavigationProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

const navItems: { href: string; label: string; sub: string; icon: LucideIcon }[] = [
  { href: "#about", label: "Sobre mim", sub: "A origem", icon: UserRound },
  { href: "#skills", label: "Habilidades", sub: "Atributos", icon: Sparkles },
  { href: "#projects", label: "Projetos", sub: "Registros da jornada", icon: ScrollText },
  { href: "#contact", label: "Contato", sub: "Uma convocação", icon: Mail },
];

function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href: string) => {
    onNavigate(href.replace("#", ""));
    setIsOpen(false);
  };

  return (
    <>
      <nav aria-label="Navegação principal" className="desktop-navigation hidden md:block">
        <ul>
          {navItems.map(({ href, label, sub, icon: Icon }, index) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(event) => { event.preventDefault(); handleNavigate(href); }}
                className={"rpg-nav-item " + (activeSection === href.slice(1) ? "is-active" : "")}
                aria-current={activeSection === href.slice(1) ? "location" : undefined}
              >
                <span className="nav-index">0{index + 1}</span>
                <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                <span className="nav-copy"><strong>{label}</strong><small>{sub}</small></span>
                <span className="nav-chevron" aria-hidden="true">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button type="button" className="mobile-menu-trigger md:hidden" aria-label="Abrir menu de navegação">
            <Menu size={21} /><span>MENU</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="mobile-sheet" showCloseButton={false}>
          <div className="mobile-sheet-heading">
            <div><span className="eyebrow">MENU DE NAVEGAÇÃO</span><SheetTitle>Escolha seu caminho</SheetTitle></div>
            <button type="button" onClick={() => setIsOpen(false)} className="mobile-sheet-close" aria-label="Fechar menu"><X size={18} /></button>
          </div>
          <nav aria-label="Navegação móvel">
            <ul className="mobile-nav-list">
              {navItems.map(({ href, label, sub, icon: Icon }, index) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(href)}
                    className={"rpg-nav-item " + (activeSection === href.slice(1) ? "is-active" : "")}
                    aria-current={activeSection === href.slice(1) ? "location" : undefined}
                  >
                    <span className="nav-index">0{index + 1}</span><Icon size={18} strokeWidth={1.6} />
                    <span className="nav-copy"><strong>{label}</strong><small>{sub}</small></span>
                    <span className="nav-chevron">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mobile-sheet-note">Uma jornada através de ideias e tecnologia.</p>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Navigation;