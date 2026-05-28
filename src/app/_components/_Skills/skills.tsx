import { Databases, Frameworks, Languages, Tools } from "@/types/skill";
import SkillCard from "./_skillCard";

function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16 sm:px-6">
      {/* Header da seção */}
      <div className="mb-8 flex items-center gap-3">
        <span className="bg-[#00e5a0]/08 rounded border border-[#00e5a0]/15 px-2.5 py-1 font-mono text-[11px] text-[#00e5a0]">
          02 / skills
        </span>
      </div>

      {/* Grid: 1 col mobile → 2 col tablet → 4 col desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SkillCard title="Programming Languages" skillList={Languages} />
        <SkillCard title="Frameworks & Libraries" skillList={Frameworks} />
        <SkillCard title="Databases" skillList={Databases} />
        <SkillCard title="And more..." skillList={Tools} />
      </div>

      {/* Legenda */}
      <div className="mt-5 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-sm bg-[#00e5a0]" />
          <span className="font-mono text-[10px] text-[#A2A2BF]">primário</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-sm bg-[#7c6fff]" />
          <span className="font-mono text-[10px] text-[#A2A2BF]">
            secundário
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
