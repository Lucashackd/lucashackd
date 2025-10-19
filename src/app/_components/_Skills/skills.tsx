import { Databases, Frameworks, Languages, Tools } from "@/types/skill";
import SkillCard from "./_skillCard";

function Skills() {
  return (
    <div id="skills" className="container m-auto p-4 gap-2 h-fit">
      <h2 className="text-gradient border-amber-200">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-fit">
        <SkillCard title="Programming Languages" skillList={Languages} />
        <SkillCard title="Frameworks & Libraries" skillList={Frameworks} />
        <SkillCard title="Databases" skillList={Databases} />
        <SkillCard title="And more..." skillList={Tools} />
      </div>
    </div>
  );
}

export default Skills;
