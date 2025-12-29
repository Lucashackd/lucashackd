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
        <div className="flex h-6 w-6 flex-col items-center justify-center bg-violet-950 p-0.5">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={20}
            height={20}
            className="h-full w-full"
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
