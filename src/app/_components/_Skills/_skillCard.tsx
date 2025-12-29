import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Item from "./item";
import type SkillCard from "@/types/skillCard";

function SkillCard(card: SkillCard) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4">
        <Item skill={card.skillList} />
      </CardContent>
    </Card>
  );
}

export default SkillCard;
