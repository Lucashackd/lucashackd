import Image from "next/image";
import type Skill from "@/types/skill";

/**
 * Converte o valor 0–100 da skill em 0–5 segmentos preenchidos.
 * 0–20 → 1 seg · 21–40 → 2 · 41–60 → 3 · 61–80 → 4 · 81–100 → 5
 */
function levelToSegments(level: number): number {
  return Math.round((level / 100) * 5);
}

/**
 * Heurística de cor: skills com level >= 61 usam accent verde (primárias),
 * as demais usam roxo (secundárias/em aprendizado).
 */
function segmentColor(level: number): "green" | "purple" {
  return level >= 61 ? "green" : "purple";
}

function Item({ skill }: { skill: Skill[] }) {
  return (
    <>
      {skill.map((s) => {
        const filled = levelToSegments(s.level);
        const color = segmentColor(s.level);

        return (
          <div
            key={s.name}
            className="flex items-center justify-between gap-2"
          >
            {/* Nome + ícone */}
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                  color === "green" ? "bg-[#00e5a0]" : "bg-[#7c6fff]"
                }`}
              />
              <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="truncate text-xs text-[#f0f0f5]">{s.name}</span>
            </div>

            {/* Segmentos de nível */}
            <div className="flex shrink-0 gap-[3px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`skill-seg ${
                    i < filled
                      ? color === "green"
                        ? "skill-seg-filled-green"
                        : "skill-seg-filled-purple"
                      : "skill-seg-empty"
                  }`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
