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

          if (visible) setActiveSection(visible.target.id as SectionId);
        },
        { rootMargin: "-18% 0px -58% 0px", threshold: [0.05, 0.2, 0.45] },
      );

      sections.forEach((section) => observer?.observe(section));
    };

    connectObserver();
    media.addEventListener("change", connectObserver);

    return () => {
      media.removeEventListener("change", connectObserver);
      observer?.disconnect();
    };
  }, []);

  const navigateToSection = useCallback((sectionId: string) => {
    if (!sectionIds.includes(sectionId as SectionId)) return;

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const destination = isMobile && sectionId === "home" ? "about" : sectionId;
    setActiveSection(destination as SectionId);

    if (isMobile && destination !== "home") {
      window.requestAnimationFrame(() => {
        document.getElementById(destination)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div className="portfolio-shell">
      <div className="ambient-grain" aria-hidden="true" />
      <Header activeSection={activeSection} onNavigate={navigateToSection} />
      <div className="portfolio-content md:pl-[18rem]">
        <main className="portfolio-stage relative flex min-h-screen flex-col">
          <div className="realm-backdrop" aria-hidden="true">
            <span className="realm-orb realm-orb-one" />
            <span className="realm-orb realm-orb-two" />
            <span className="realm-grid" />
          </div>

          <div className={"portfolio-panel panel-home " + (activeSection === "home" ? "is-active" : "")} data-section="home">
            <GuardianShowcase onNavigate={navigateToSection} />
          </div>
          <div className={"portfolio-panel panel-about " + (activeSection === "about" ? "is-active" : "")} data-section="about">
            <About onNavigate={navigateToSection} />
          </div>
          <div className={"portfolio-panel panel-skills " + (activeSection === "skills" ? "is-active" : "")} data-section="skills">
            <Skills />
          </div>
          <div className={"portfolio-panel panel-projects " + (activeSection === "projects" ? "is-active" : "")} data-section="projects">
            <Projects />
          </div>
          <div className={"portfolio-panel panel-contact " + (activeSection === "contact" ? "is-active" : "")} data-section="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
