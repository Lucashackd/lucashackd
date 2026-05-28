import { FiGithub, FiYoutube } from "react-icons/fi";
import { IoLink } from "react-icons/io5";
import { IconType } from "react-icons";
import TechIcon from "./techIcon";
import type ProjectCard from "@/types/projectCard";

function ProjectCard(project: ProjectCard) {
  const iconMap: Record<string, IconType> = {
    video: FiYoutube,
    website: IoLink,
    github: FiGithub,
  };

  return (
    <div className="card-accent-top flex h-full flex-col rounded-xl border border-white/[0.07] bg-[#111118] transition-colors duration-200 hover:border-[#00e5a0]/20">

      {/* Corpo do card */}
      <div className="flex flex-1 items-stretch">

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div>
            <p className="mb-1 font-mono text-[10px] text-[#A2A2BF]">
              {/* Número do projeto é definido no pai — aqui deixamos o título ocupar */}
            </p>
            <h3 className="text-sm font-semibold text-[#f0f0f5]">
              {project.title}
            </h3>
          </div>
          <p className="flex-1 whitespace-pre-wrap text-xs leading-relaxed text-[#A2A2BF]">
            {project.description}
          </p>
        </div>

        {/* Ações (links) — coluna lateral direita */}
        <div
          className={`flex flex-col items-center border-l border-white/[0.07] bg-[#0a0a0f] ${
            project.links.length < 3 ? "justify-center" : "justify-between"
          }`}
        >
          {project.links.map((link, idx) => {
            const Icon = iconMap[link.type];
            return (
              <a
                key={idx}
                href={String(link.url)}
                target="_blank"
                rel="noreferrer"
                className="flex h-full w-12 items-center justify-center text-[#A2A2BF] transition-colors duration-200 hover:bg-[#1a1a24] hover:text-[#00e5a0]"
                aria-label={link.type}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Stack de tecnologias */}
      <div className="flex flex-wrap gap-1.5 border-t border-white/[0.07] px-4 py-2.5">
        {project.stack.map((tech, idx) => (
          <TechIcon key={idx} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
