import { FiGithub, FiYoutube } from "react-icons/fi";
import { IoLink } from "react-icons/io5";
import { IconType } from "react-icons";
import TechIcon from "./techIcon";
import type ProjectCard from "@/types/projectCard";

function ProjectCard(project: ProjectCard) {
  const defaultIconMap: Record<string, IconType> = {
    video: FiYoutube,
    website: IoLink,
    github: FiGithub,
  };

  return (
    <div className="flex h-full w-full flex-col items-start justify-start">
      <div className="flex h-full w-full items-stretch justify-center overflow-clip rounded-t-sm">
        <div className="glass-effect flex h-full w-full flex-col items-start justify-start gap-2 p-2 shadow-none">
          <div className="flex h-fit w-full items-center justify-start">
            <h3 className="font-medium text-amber-200">{project.title}</h3>
          </div>
          <div className="flex h-fit w-full items-start justify-start">
            <p className="text-sm whitespace-pre-wrap text-white text-shadow-[2px_2px_0.5px_rgba(0,0,0,0.5)]">
              {project.description}
            </p>
          </div>
        </div>
        <div
          className={`${
            project.links.length < 3 ? "justify-center" : "justify-between"
          } flex h-full w-fit flex-col items-center bg-violet-950 text-sky-300`}
        >
          {project.links.map((link, idx) => {
            const Icon = defaultIconMap[link.type];
            return (
              <a
                key={idx}
                href={String(link.url)}
                target="_blank"
                rel="noreferrer"
                className="flex h-full w-full items-center justify-center p-5 text-xl transition-colors duration-400 hover:bg-violet-800 hover:text-2xl hover:text-amber-200"
              >
                <Icon className="absolute" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex h-fit w-full items-start justify-start gap-2">
        {project.stack.map((tech, idx) => {
          return <TechIcon key={idx} icon={tech.icon} name={tech.name} />;
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
