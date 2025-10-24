import { Kode_Mono } from "next/font/google";
import { RiMailFill } from "react-icons/ri";
import { PiLinkedinLogoFill, PiWhatsappLogoFill } from "react-icons/pi";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

function Contact() {
  return (
    <div id="contact" className="flex flex-col bg-rose-300 w-full h-fit">
      <div className="container m-auto p-4 sm:px-20 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-fit">
          <div className="flex justify-center md:justify-start w-full h-full">
            <h2
              className={`${kodeMono.className} text-[2rem] sm:text-[2.5rem] lg:text-[4rem] font-bold text-lime-200 text-shadow-[1.3px_1.3px_0_#4C1D95,-1.3px_-1.3px_0_#4C1D95,1.3px_-1.3px_0_#4C1D95,-1.3px_1.3px_0_#4C1D95]`}
            >
              Contact Me
            </h2>
          </div>
          <div className="flex justify-center sm:justify-between gap-6 items-center w-full h-full">
            <a
              href="mailto:lucashackd@gmail.com?subject=Contact from portfolio"
              className="flex flex-col items-center text-violet-950"
            >
              <RiMailFill size={80} className="w-10 md:w-20" />
              <span className="hidden sm:block font-bold">Email</span>
            </a>
            <a
              href="https://wa.me/+5553981618825"
              className="flex flex-col items-center text-violet-950"
            >
              <PiWhatsappLogoFill size={80} className="w-10 md:w-20" />
              <span className="hidden sm:block font-bold">WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lucashackd/"
              className="flex flex-col items-center text-violet-950"
            >
              <PiLinkedinLogoFill size={80} className="w-10 md:w-20" />
              <span className="hidden sm:block font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
