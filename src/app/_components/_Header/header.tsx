import { Card, CardContent } from "@/components/ui/card";
import Navigation from "./navigation";

function Header() {
  return (
    <div id="header" className="container m-auto p-4">
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-gradient text-4xl">Lucashackd</div>
            <div className="self-center">
              <Navigation />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Header;
