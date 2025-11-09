import { Heart } from "lucide-react";
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

function Footer() {
  return (
    <div className="relative z-10 flex w-full items-center justify-center bg-violet-900 p-6 shadow-[0_-4px_10px_rgba(0,0,0,0.6)]">
      <p className="text-sm sm:text-lg xl:text-2xl text-amber-200 text-center">
        Made with <Heart fill="#2E1065" className="inline-block text-rose-300 size-[0.875rem] sm:size-[1.125rem]" />{" "}
        <span className={`${kodeMono.className} text-sky-300`}>
          (and Next.js)
        </span>{" "}
        by{" "}
        <span className="font-extrabold text-lime-200">
          Lucas Hackbart Döhnert.
        </span>
      </p>
    </div>
  );
}

export default Footer;
