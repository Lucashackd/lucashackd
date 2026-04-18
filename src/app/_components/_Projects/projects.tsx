import { ArrowRight } from "lucide-react";
import ProjectCard from "./_projectCard";
import {
  LawFirmLinks,
  MyComedyTubeLinks,
  RealStateLinks,
  RealStatePortfolioLinks,
} from "@/types/projectLink";
import {
  LawFirmStack,
  MyComedyTubeStack,
  RealStatePortfolioStack,
  RealStateStack,
} from "@/types/projectStack";

const projects = [
  {
    num: "01",
    type: "Frontend",
    title: "Law Firm Landing Page (Front-End)",
    description:
      "A simple landing page developed for a local law firm specialized in trademark registration. It features sections such as services, introduction, contact form, testimonials, and more. The design is responsive and user-friendly, ensuring a seamless experience across all devices.",
    links: LawFirmLinks,
    stack: LawFirmStack,
  },
  {
    num: "02",
    type: "Full Stack",
    title: "Real State CRM",
    description:
      "A basic CRM developed for a local real estate company. Its features include: user and client management, value and debt registration with corresponding receipts, dashboards, history and more.\n\nACCESS CREDENTIALS: teste@email.com - 123123",
    links: RealStateLinks,
    stack: RealStateStack,
  },
  {
    num: "03",
    type: "Full Stack",
    title: "Real State website",
    description:
      "A real estate complete website. It includes features such as property search, filtering, detailed property pages and an administration panel. Built with React and Tailwind CSS for a modern and responsive design.",
    links: RealStatePortfolioLinks,
    stack: RealStatePortfolioStack,
  },
  {
    num: "04",
    type: "Full Stack",
    title: "MyComedyTube",
    description:
      "Comedy video sharing platform, integrating mental health and freedom of expression.",
    links: MyComedyTubeLinks,
    stack: MyComedyTubeStack,
  },
];

function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 sm:px-6">

      {/* Header da seção */}
      <div className="mb-8 flex items-center gap-3">
        <span className="rounded bg-[#00e5a0]/08 border border-[#00e5a0]/15 px-2.5 py-1 font-mono text-[11px] text-[#00e5a0]">
          03 / projects
        </span>
        <h2 className="text-xl font-semibold text-[#f0f0f5] mb-0">
          Projetos em destaque
        </h2>
      </div>

      {/* Grid: 1 col mobile → 2 col lg */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((p) => (
          <div key={p.num} className="flex flex-col gap-0">
            {/* Numeração acima do card */}
            <p className="mb-1.5 font-mono text-[10px] text-[#7a7a90]">
              {p.num} — {p.type}
            </p>
            <ProjectCard
              title={p.title}
              description={p.description}
              links={p.links}
              stack={p.stack}
            />
          </div>
        ))}
      </div>

      {/* CTA GitHub */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/lucashackd"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#111118] px-5 py-2.5 text-sm text-[#f0f0f5] transition-all duration-200 hover:border-[#00e5a0]/30 hover:text-[#00e5a0]"
        >
          <span>More on GitHub</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
