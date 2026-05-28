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
    type: "Full Stack",
    title: "MyComedyTube",
    description:
      "Plataforma de compartilhamento de vídeos de comédia, integrando saúde mental e liberdade de expressão. A aplicação oferece upload de vídeos, likes, favoritos, definição de preferências e uma interface responsiva para uma experiência de usuário fluida.",
    links: MyComedyTubeLinks,
    stack: MyComedyTubeStack,
  },
  {
    num: "02",
    type: "Full Stack",
    title: "Sistema de Gestão de Clientes",
    description:
      "Aplicação robusta focada em segurança corporativa e rastreabilidade. Conta com controle de acesso por papéis, prevenção de duplicidade via transações atômicas e geração avançada de relatórios em PDF e Excel.\n\nACCESS CREDENTIALS: teste@email.com - 123123",
    links: RealStateLinks,
    stack: RealStateStack,
  },
  {
    num: "03",
    type: "Full Stack",
    title: "Sistema Imobiliário",
    description:
      "Plataforma escalável e em tempo real para gestão de portfólio de imóveis e corretores parceiros. Possui um painel administrativo completo integrado a uma vitrine pública otimizada",
    links: RealStatePortfolioLinks,
    stack: RealStatePortfolioStack,
  },
  {
    num: "04",
    type: "Front-End",
    title: "Landing Page para Escritório de Advocacia",
    description:
      "Uma landing page simples desenvolvida para um escritório de advocacia local especializado em registro de marcas. Ela apresenta seções como serviços, apresentação, formulário de contato, depoimentos e muito mais. O design é responsivo e intuitivo, garantindo uma experiência perfeita em todos os dispositivos.",
    links: LawFirmLinks,
    stack: LawFirmStack,
  },
];

function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 sm:px-6">
      {/* Header da seção */}
      <div className="mb-8 flex items-center gap-3">
        <span className="bg-[#00e5a0]/08 rounded border border-[#00e5a0]/15 px-2.5 py-1 font-mono text-[11px] text-[#00e5a0]">
          03 / projects
        </span>
        <h2 className="mb-0 text-xl font-semibold text-[#f0f0f5]">
          Projetos em destaque
        </h2>
      </div>

      {/* Grid: 1 col mobile → 2 col lg */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((p) => (
          <div key={p.num} className="flex flex-col gap-0">
            {/* Numeração acima do card */}
            <p className="mb-1.5 font-mono text-[10px] text-[#A2A2BF]">
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
