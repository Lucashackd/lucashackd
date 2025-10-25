import { ArrowRight } from "lucide-react";
import ProjectCard from "./_projectCard";
import { MyComedyTubeLinks, RealStateLinks } from "@/types/projectLink";
import { MyComedyTubeStack, RealStateStack } from "@/types/projectStack";

function Projects() {
  return (
    <div id="projects" className="container m-auto p-4 gap-2 h-fit">
      <h2 className="text-gradient">Projects</h2>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-fit">
          <ProjectCard
            title="MyComedyTube"
            description="Comedy video sharing platform, integrating mental health and freedom of expression."
            links={MyComedyTubeLinks}
            stack={MyComedyTubeStack}
          />
          <ProjectCard
            title="Real State CRM"
            description={`A basic CRM developed for a local real estate company. Its features include: user and client management, value and debt registration with corresponding receipts, dashboards, history and more.\n\nACCESS CREDENTIALS: teste@email.com - 123123`}
            links={RealStateLinks}
            stack={RealStateStack}
          />
          <ProjectCard
            title="Real State CRM"
            description={`A basic CRM developed for a local real estate company. Its features include: user and client management, value and debt registration with corresponding receipts, dashboards, history and more.\n\nACCESS CREDENTIALS: teste@email.com - 123123`}
            links={RealStateLinks}
            stack={RealStateStack}
          />
          <ProjectCard
            title="Real State CRM"
            description={`A basic CRM developed for a local real estate company. Its features include: user and client management, value and debt registration with corresponding receipts, dashboards, history and more.\n\nACCESS CREDENTIALS: teste@email.com - 123123`}
            links={RealStateLinks}
            stack={RealStateStack}
          />
        </div>
        <a
          href="https://github.com/lucashackd"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center w-fit h-fit py-2 px-4 gap-2.5 bg-sky-300 text-violet-950 font-medium text-xl rounded-sm border-[1px] border-violet-950"
        >
          <span>More on GitHub</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

export default Projects;
