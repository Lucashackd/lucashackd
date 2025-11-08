import { Databases, Frameworks, Languages, Tools } from "@/types/skill";
import SkillCard from "./_skillCard";

function Skills() {
  return (
    <div id="skills" className="container m-auto h-fit gap-2 p-4">
      <h2 className="text-gradient">Skills</h2>
      <div className="grid h-fit grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SkillCard title="Programming Languages" skillList={Languages} />
        <SkillCard title="Frameworks & Libraries" skillList={Frameworks} />
        <SkillCard title="Databases" skillList={Databases} />
        <SkillCard title="And more..." skillList={Tools} />
      </div>
    </div>
  );
}

export default Skills;
