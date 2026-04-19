"use client";

import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 sm:px-6 sm:py-20"
    >
      {/* Badge "available for work" */}
      <div className="mb-8 flex justify-center sm:justify-start">
        <span className="bg-[#00e5a0]/08 inline-flex items-center gap-2 rounded-full border border-[#00e5a0]/20 px-3 py-1 font-mono text-xs text-[#00e5a0]">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#00e5a0]" />
          available for work
        </span>
      </div>

      {/* Hero grid — mobile: coluna única / lg: 2 colunas */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Texto */}
        <div className="order-2 flex flex-col gap-5 lg:order-1">
          <div>
            <h1 className="text-4xl leading-tight font-bold text-[#f0f0f5] sm:text-5xl lg:text-6xl">
              Lucas <span className="text-[#00e5a0]">Döhnert</span>
            </h1>
            <p className="mt-2 font-mono text-sm text-[#7c6fff] sm:text-base">
              $ full_stack_developer --mode=passionate
            </p>
          </div>

          <p className="text-sm leading-relaxed text-[#7a7a90] sm:text-base lg:max-w-lg">
            Desenvolvedor Full Stack graduado em Sistemas para Internet (IFSUL)
            focado em construir soluções escaláveis e arquiteturas eficientes.
            Especialista no ecossistema Java, PHP e frameworks modernos de
            JavaScript (Angular, React, Next.js), com experiência comprovada em
            refatorações complexas e ciclo de vida completo de produtos. Utilizo
            ferramentas de IA de ponta para otimizar o desenvolvimento e
            garantir entregas de alta performance. Proficiente em inglês (C1) e
            apaixonado por unir design centrado no usuário com código limpo.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-md bg-[#00e5a0] px-5 py-2.5 text-sm font-bold text-[#0a0a0f] transition-opacity duration-200 hover:opacity-90"
            >
              Ver projetos
            </a>
            {/* TODO: adicionar link do currículo */}
            <a
              href="#"
              className="rounded-md border border-white/[0.07] px-5 py-2.5 text-sm text-[#f0f0f5] transition-colors duration-200 hover:border-[#00e5a0]/40 hover:text-[#00e5a0]"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 border-t border-white/[0.07] pt-5">
            <div>
              <p className="font-mono text-2xl font-bold text-[#00e5a0]">4+</p>
              <p className="text-xs tracking-widest text-[#7a7a90] uppercase">
                anos exp.
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-[#00e5a0]">10+</p>
              <p className="text-xs tracking-widest text-[#7a7a90] uppercase">
                tecnologias
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-[#00e5a0]">15+</p>
              <p className="text-xs tracking-widest text-[#7a7a90] uppercase">
                projetos
              </p>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            {/* Cantos decorativos */}
            <span className="photo-corner photo-corner-tl" />
            <span className="photo-corner photo-corner-br" />

            <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#1a1a24]">
              <Image
                src="/images/profile.webp"
                alt="Lucas Hackbart Döhnert"
                width={640}
                height={640}
                className="h-auto w-48 object-cover grayscale-15 sm:w-64 lg:w-72"
                sizes="(max-width: 640px) 12rem, (max-width: 1024px) 16rem, 18rem"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
