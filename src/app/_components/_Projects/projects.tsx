import { ArrowRight } from "lucide-react";

function Projects() {
  return (
    <div id="projects" className="container m-auto p-4 gap-2 h-fit">
      <h2 className="text-gradient border-amber-200">Projects</h2>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 h-fit"></div>
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
