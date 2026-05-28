import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0a0a0f]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <p className="font-mono text-xs text-[#A2A2BF]">
          © 2025 Lucas Hackbart Döhnert
        </p>
        <p className="font-mono text-xs text-[#A2A2BF]">
          made with{" "}
          <Heart
            size={10}
            className="inline-block text-[#7c6fff]"
            fill="#7c6fff"
          />{" "}
          and{" "}
          <span className="text-[#00e5a0]">Next.js</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
