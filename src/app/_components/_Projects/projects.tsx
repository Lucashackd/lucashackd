import { ArrowRight } from "lucide-react";
import ProjectCard from "./_projectCard";
import { MyComedyTubeLinks, RealStateLinks } from "@/types/projectLink";
import { MyComedyTubeStack, RealStateStack } from "@/types/projectStack";

function Projects() {
  return (
    <div id="projects" className="container m-auto h-fit gap-2 p-4">
      <h2 className="text-gradient">Projects</h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="grid h-fit w-full grid-cols-1 gap-6 lg:grid-cols-2">
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
          className="flex h-fit w-fit items-center justify-center gap-2.5 rounded-sm border-[1px] border-violet-950 bg-sky-300 px-4 py-2 text-xl font-medium text-violet-950"
        >
          <span>More on GitHub</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

export default Projects;
