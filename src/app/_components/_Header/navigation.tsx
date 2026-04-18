"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, User, Star, FolderGit2, AtSign } from "lucide-react";

const navItems = [
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Star },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#contact", label: "Contact", icon: AtSign },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="nav-link text-sm tracking-widest uppercase font-mono">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile — botão hambúrguer */}
      <button
        className="flex md:hidden flex-col gap-[5px] p-1"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu"
      >
        <span className="block w-5 h-[1.5px] bg-[#7a7a90]" />
        <span className="block w-5 h-[1.5px] bg-[#7a7a90]" />
        <span className="block w-5 h-[1.5px] bg-[#7a7a90]" />
      </button>

      {/* Mobile — drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* painel */}
          <div className="relative ml-auto flex h-full w-72 flex-col bg-[#111118] border-l border-white/[0.07] p-6">
            <button
              className="absolute top-4 right-4 text-[#7a7a90] hover:text-[#00e5a0] transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>

            <p className="font-mono text-xs tracking-widest text-[#7a7a90] uppercase mb-8 mt-2">
              // navegação
            </p>

            <nav>
              <ul className="flex flex-col gap-3">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={(e) => handleNav(e, href)}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-[#1a1a24] px-4 py-3 text-sm text-[#f0f0f5] transition-all duration-200 hover:border-[#00e5a0]/30 hover:text-[#00e5a0]"
                    >
                      <Icon size={16} className="shrink-0" />
                      <span className="font-mono tracking-wider">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto border-t border-white/[0.07] pt-4">
              <p className="font-mono text-[10px] text-[#7a7a90]">
                lucashackd.dev
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
