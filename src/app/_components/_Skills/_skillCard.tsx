import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Item from "./item";

function skillCard({ props }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Item skill={props.skills[0]} />
      </CardContent>
    </Card>
  );
}

export default skillCard;
