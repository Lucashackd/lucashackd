import Image from "next/image";
import type Skill from "@/types/skill";
import { Progress } from "@/components/ui/progress";

function Item({ skill }: { skill: Skill[] }) {
  return skill.map((s) => (
    <div
      key={s.name}
      className="flex justify-between items-center p-1 rounded-[0.25rem] bg-violet-950 h-7 w-full text-amber-200"
    >
      <div className="flex justify-start items-center gap-2 h-full w-fit">
        <Image src={s.icon} alt={s.name} width={19.07} height={19.07} />
        <span>{s.name}</span>
      </div>
      <div className="flex justify-end items-center gap-0.5 max-w-1/2 h-full w-full">
        <Progress
          value={s.level}
          className="bg-violet-900 h-full w-full [&>[data-state]]:bg-amber-200 rounded-[0.125rem]"
        />
      </div>
    </div>
  ));
}

export default Item;
