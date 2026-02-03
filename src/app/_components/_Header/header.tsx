import { Card, CardContent } from "@/components/ui/card";
import Navigation from "./navigation";
import { Jersey_10 } from "next/font/google";

const jersey10 = Jersey_10({
  variable: "--font-jersey10",
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  return (
    <div id="header" className="container m-auto p-4">
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div
              className={`${jersey10.className} text-3xl text-amber-200 sm:text-4xl lg:text-5xl`}
            >
              Lucashackd
            </div>
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
