import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Lucas Hackbart Döhnert | Desenvolvedor Full Stack",
  description: "Portfólio profissional de Lucas Hackbart Döhnert, desenvolvedor Full Stack. Projetos, habilidades e trajetória em desenvolvimento de software.",
  openGraph: { title: "Lucas Hackbart Döhnert | Desenvolvedor Full Stack", description: "Projetos, habilidades e trajetória em desenvolvimento de software.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={inter.className + " antialiased"}><TooltipProvider delayDuration={0}>{children}</TooltipProvider></body></html>;
}