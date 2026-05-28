import Item from "./item";
import type SkillCard from "@/types/skillCard";

function SkillCard(card: SkillCard) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#111118] p-4">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#A2A2BF]">
        
        {card.title}
      </p>
      <div className="flex flex-col gap-3">
        <Item skill={card.skillList} />
      </div>
    </div>
  );
}

export default SkillCard;
