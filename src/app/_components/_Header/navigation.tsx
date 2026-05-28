"use client";

import { useState } from "react";
import Link from "next/link";
import { X, User, Star, FolderGit2, AtSign } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Star },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#contact", label: "Contact", icon: AtSign },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (
    event: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
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
              <Link
                href={href}
                className="nav-link font-mono text-sm tracking-widest uppercase"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile — botão hambúrguer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="flex flex-col gap-[5px] p-1 md:hidden"
            aria-label="Abrir menu"
          >
            <span className="block h-[1.5px] w-5 bg-[#A2A2BF]" />
            <span className="block h-[1.5px] w-5 bg-[#A2A2BF]" />
            <span className="block h-[1.5px] w-5 bg-[#A2A2BF]" />
          </button>
        </SheetTrigger>

        <SheetContent side="right">
          <p className="mt-2 mb-8 font-mono text-xs tracking-widest text-[#A2A2BF] uppercase">
            // navegação
          </p>

          <nav>
            <ul className="flex flex-col gap-3">
              {navItems.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={(e) => handleNav(e, href)}
                    className="flex w-full items-center gap-3 rounded-lg border border-white/[0.07] bg-[#1a1a24] px-4 py-3 text-left text-sm text-[#f0f0f5] transition-all duration-200 hover:border-[#00e5a0]/30 hover:text-[#00e5a0]"
                  >
                    <Icon size={16} className="shrink-0" />
                    <span className="font-mono tracking-wider">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-white/[0.07] pt-4">
            <p className="font-mono text-[10px] text-[#A2A2BF]">
              lucashackd.dev
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Navigation;
