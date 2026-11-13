"use client";

import { useCallback, useState } from "react";
import About from "./_components/_About/about";
import Contact from "./_components/_Contact/contact";
import Footer from "./_components/_Footer/footer";
import Header from "./_components/_Header/header";
import Projects from "./_components/_Projects/projects";
import Skills from "./_components/_Skills/skills";

const sectionIds = ["about", "skills", "projects", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  const navigateToSection = useCallback((sectionId: string) => {
    if (!sectionIds.includes(sectionId as SectionId)) return;

    setActiveSection(sectionId as SectionId);

    // Tablets and phones keep the original continuous reading experience.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
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

          <div className={"portfolio-panel panel-about " + (activeSection === "about" ? "is-active" : "")} data-section="about" aria-hidden={activeSection !== "about"}>
            <About onNavigate={navigateToSection} />
          </div>
          <div className={"portfolio-panel panel-skills " + (activeSection === "skills" ? "is-active" : "")} data-section="skills" aria-hidden={activeSection !== "skills"}>
            <Skills />
          </div>
          <div className={"portfolio-panel panel-projects " + (activeSection === "projects" ? "is-active" : "")} data-section="projects" aria-hidden={activeSection !== "projects"}>
            <Projects />
          </div>
          <div className={"portfolio-panel panel-contact " + (activeSection === "contact" ? "is-active" : "")} data-section="contact" aria-hidden={activeSection !== "contact"}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}