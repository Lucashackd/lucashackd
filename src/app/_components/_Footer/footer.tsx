import { Heart } from "lucide-react";
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

function Footer() {
  return (
    <div className="flex justify-center items-center w-full p-6 bg-violet-900">
      <p className="flex text-lg text-amber-200 gap-2">
        Made with <Heart className="text-rose-300" />{" "}
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
