"use client";

import { useCallback, useEffect, useState } from "react";
import About from "./_components/_About/about";
import Contact from "./_components/_Contact/contact";
import Footer from "./_components/_Footer/footer";
import Header from "./_components/_Header/header";
import GuardianShowcase from "./_components/_Home/guardian-showcase";
import Projects from "./_components/_Projects/projects";
import Skills from "./_components/_Skills/skills";

const sectionIds = ["home", "about", "skills", "projects", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    let observer: IntersectionObserver | null = null;

    const connectObserver = () => {
      observer?.disconnect();
      observer = null;
      setActiveSection(media.matches ? "about" : "home");
      if (!media.matches) return;

      const sections = sectionIds
        .filter((sectionId) => sectionId !== "home")
        .map((sectionId) => document.getElementById(sectionId))
        .filter((section): section is HTMLElement => Boolean(section));

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible) setActiveSection(¶»§q«^