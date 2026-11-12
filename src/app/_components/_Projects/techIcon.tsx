"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import Image from "next/image";
import type ProjectStack from "@/types/projectStack";

function TechIcon(tech: ProjectStack) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex h-6 w-6 items-center justify-center rounded border border-white/[0.07] bg-[#211c17] p-0.5 transition-colors hover:border-[#c6a76b]/30">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={18}
            height={18}
            className="h-full w-full object-contain"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent className="border border-white/[0.07] bg-[#211c17] text-xs text-[#eee7d8]">
        <TooltipArrow className="fill-[#211c17]" />
        <p>{tech.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default TechIcon;
