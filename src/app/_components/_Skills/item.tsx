import Image from "next/image";
import type Skill from "@/types/skill";
import { Progress } from "@/components/ui/progress";

function Item({ skill }: { skill: Skill[] }) {
  return skill.map((s) => (
    <div
      key={s.name}
      className="flex h-7 w-full items-center justify-between rounded-[0.25rem] bg-violet-950 p-1 text-amber-200"
    >
      <div className="flex h-full w-fit items-center justify-start gap-2">
        <Image src={s.icon} alt={s.name} width={19.07} height={19.07} />
        <span className="text-sm 2xl:text-base">{s.name}</span>
      </div>
      <div className="flex h-full w-full max-w-1/2 items-center justify-end gap-0.5">
        <Progress
          value={s.level}
          className="h-full w-full rounded-[0.125rem] bg-violet-900 [&>[data-state]]:bg-amber-200"
        />
      </div>
    </div>
  ));
}

export default Item;
