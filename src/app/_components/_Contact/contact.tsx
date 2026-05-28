import { RiMailFill } from "react-icons/ri";
import { PiLinkedinLogoFill, PiWhatsappLogoFill } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const links = [
  {
    href: "mailto:lucashackd@gmail.com?subject=Contact from portfolio",
    icon: RiMailFill,
    label: "Email",
  },
  {
    href: "https://wa.me/+5553981618825",
    icon: PiWhatsappLogoFill,
    label: "WhatsApp",
  },
  {
    href: "https://www.linkedin.com/in/lucashackd/",
    icon: PiLinkedinLogoFill,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/lucashackd",
    icon: FiGithub,
    label: "GitHub",
  },
];

function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.07] bg-[#0a0a0f]">
      <div className="container mx-auto px-4 py-20 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Tag de seção */}
          <span className="bg-[#00e5a0]/08 rounded border border-[#00e5a0]/15 px-2.5 py-1 font-mono text-[11px] text-[#00e5a0]">
            04 / contato
          </span>

          {/* Título */}
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[#f0f0f5] sm:text-4xl">
              Vamos <span className="text-[#00e5a0]">trabalhar juntos</span>
            </h2>
            <p className="font-mono text-sm text-[#A2A2BF]">
              // aberto a oportunidades e colaborações
            </p>
          </div>

          {/* Links de contato */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-lg border border-white/[0.07] bg-[#111118] px-4 py-2.5 text-sm text-[#f0f0f5] transition-all duration-200 hover:border-[#00e5a0]/30 hover:text-[#00e5a0]"
              >
                <Icon size={16} className="shrink-0" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
