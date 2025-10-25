import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectStack from "@/types/projectStack";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import Image from "next/image";

function TechIcon(tech: ProjectStack) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex flex-col justify-center items-center w-6 h-6 p-0.5 bg-violet-950">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={20}
            height={20}
            className="w-full h-full"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tech.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default TechIcon;
