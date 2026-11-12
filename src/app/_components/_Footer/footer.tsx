import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0a0908]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <p className="font-mono text-xs text-[#b8ad9a]">
          © 2025 Lucas Hackbart Döhnert
        </p>
        <p className="font-mono text-xs text-[#b8ad9a]">
          made with{" "}
          <Heart
            size={10}
            className="inline-block text-[#8f5550]"
            fill="#8f5550"
          />{" "}
          and{" "}
          <span className="text-[#c6a76b]">Next.js</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
