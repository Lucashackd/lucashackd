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
    <div className="flex flex-col justify-start items-start w-full h-full">
      <div className="flex justify-center items-stretch w-full h-full rounded-t-sm overflow-clip">
        <div className="flex flex-col justify-start items-start w-full h-full gap-2 p-2 glass-effect shadow-none">
          <div className="flex justify-start items-center w-full h-fit">
            <h3 className="font-medium text-amber-200">{project.title}</h3>
          </div>
          <div className="flex justify-start items-start w-full h-fit">
            <p className="text-sm text-white text-shadow-[2px_2px_0.5px_rgba(0,0,0,0.5)] whitespace-pre-wrap">
              {project.description}
            </p>
          </div>
        </div>
        <div
          className={`${
            project.links.length < 3 ? "justify-center" : "justify-between"
          } flex flex-col items-center w-fit h-full gap-2 p-2 bg-violet-950 text-sky-300`}
        >
          {project.links.map((link, idx) => {
            const Icon = defaultIconMap[link.type];
            return (
              <a
                key={idx}
                href={String(link.url)}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex justify-start items-start w-full h-fit gap-2">
        {project.stack.map((tech, idx) => {
          return <TechIcon key={idx} icon={tech.icon} name={tech.name} />;
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
