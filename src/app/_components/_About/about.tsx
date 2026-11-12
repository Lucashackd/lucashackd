"use client";

import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 sm:px-6 sm:py-20"
    >
      {/* Header da seção */}
      <div className="mb-8 flex items-center gap-3">
        <span className="bg-[#c6a76b]/08 rounded border border-[#c6a76b]/15 px-2.5 py-1 font-mono text-[11px] text-[#c6a76b]">
          01 / sobre mim
        </span>
      </div>

      {/* Hero grid — mobile: coluna única / lg: colunas equilibradas */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        {/* Texto */}
        <div className="order-2 flex flex-col gap-5 lg:order-1">
          <div>
            <h1 className="text-4xl leading-tight font-bold text-[#eee7d8] sm:text-5xl lg:text-5xl">
              Lucas <span className="text-[#c6a76b]">Döhnert</span>
            </h1>
            <p className="mt-2 font-mono text-sm text-[#8f5550] sm:text-base">
              $ full_stack_developer
            </p>
          </div>

          <div className="space-y-6 text-justify text-sm leading-relaxed text-[#b8ad9a] sm:text-base">
            <p>
              Olá, sou o Lucas! Como Tecnólogo em Sistemas para Internet e
              Desenvolvedor Full-Stack, meu foco principal é a arquitetura e a
              criação de produtos digitais escaláveis. Sou apaixonado por
              solucionar problemas de negócio complexos, atuando de ponta a
              ponta em todo o ciclo de vida do software — desde a modelagem de
              bancos de dados até a entrega de interfaces web modernas e
              otimizadas para a melhor experiência do usuário.
            </p>

            <p>
              Tenho sólida experiência prática na construção de ecossistemas
              robustos. No back-end, atuo no desenvolvimento de APIs RESTful
              seguras e eficientes, utilizando frameworks consolidados como Java
              (Spring Boot) e PHP (Laravel), além de gerenciar dados e
              infraestrutura utilizando tecnologias como SQL e a suíte Firebase.
              No front-end, transformo requisitos em aplicações de alta
              performance utilizando as tecnologias mais modernas do mercado,
              como React, Next.js, Angular, TypeScript e Tailwind CSS.
            </p>

            <p>
              Meu trabalho é guiado pela busca constante por qualidade e
              produtividade. Aplico padrões de projeto (design patterns) e
              metodologias ágeis para garantir que o código seja limpo, testável
              e de fácil manutenção. Além disso, sou um grande entusiasta da
              inovação: integro ativamente ferramentas de Inteligência
              Artificial (como GitHub Copilot, Claude e Gemini) ao meu fluxo de
              trabalho diário, o que me permite acelerar entregas e elevar o
              nível técnico das soluções que desenvolvo.
            </p>

            <p>
              Com inglês avançado, perfil analítico e forte espírito de equipe,
              acredito que a comunicação clara é tão importante quanto um bom
              código. Estou sempre aberto a novas conexões, aprendizados e
              desafios tecnológicos. Fique à vontade para explorar meus projetos
              na seção abaixo ou entrar em contato para trocarmos ideias!
            </p>
          </div>

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
              className="rounded-md bg-[#c6a76b] px-5 py-2.5 text-sm font-bold text-[#0a0908] transition-opacity duration-200 hover:opacity-90"
            >
              Ver projetos
            </a>
            {/* Currículo */}
            <a
              href="/docs/Lucas_Dohnert_Desenvolvedor_Full_Stack.pdf"
              download={"Lucas_Dohnert_Desenvolvedor_Full_Stack.pdf"}
              className="rounded-md border border-white/[0.07] px-5 py-2.5 text-sm text-[#eee7d8] transition-colors duration-200 hover:border-[#c6a76b]/40 hover:text-[#c6a76b]"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 border-t border-white/[0.07] pt-5">
            <div>
              <p className="font-mono text-2xl font-bold text-[#c6a76b]">3+</p>
              <p className="text-xs tracking-widest text-[#b8ad9a] uppercase">
                anos exp.
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-[#c6a76b]">10+</p>
              <p className="text-xs tracking-widest text-[#b8ad9a] uppercase">
                tecnologias
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-[#c6a76b]">15+</p>
              <p className="text-xs tracking-widest text-[#b8ad9a] uppercase">
                projetos
              </p>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="order-1 flex justify-center lg:order-2">
          {/* Layout SM: uma imagem */}
          <div className="md:hidden">
            <Image
              src="/images/profile2.webp"
              alt="Lucas Hackbart Döhnert"
              width={640}
              height={640}
              className="h-auto w-64 rounded-2xl object-cover grayscale-15"
              sizes="16rem"
              priority
            />
          </div>

          {/* Layout MD: duas imagens lado a lado */}
          <div className="hidden gap-6 md:flex lg:hidden">
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#211c17]">
              <span className="photo-corner photo-corner-tl" />
              <span className="photo-corner photo-corner-br" />

              <Image
                src="/images/profile2.webp"
                alt="Lucas Hackbart Döhnert"
                width={640}
                height={640}
                className="h-auto w-full object-cover grayscale-15"
                sizes="(max-width: 768px) 50vw"
                priority
              />
            </div>

            <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#211c17]">
              <span className="photo-corner photo-corner-tl" />
              <span className="photo-corner photo-corner-br" />

              <Image
                src="/images/profile.webp"
                alt="Lucas Hackbart Döhnert"
                width={640}
                height={640}
                className="h-auto w-full object-cover grayscale-15"
                sizes="(max-width: 768px) 50vw"
              />
            </div>
          </div>

          {/* Layout LG: pilha de imagens */}
          <div className="hidden w-full max-w-[28rem] flex-col gap-6 lg:flex xl:hidden">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#211c17]">
              <span className="photo-corner photo-corner-tl" />
              <span className="photo-corner photo-corner-br" />

              <Image
                src="/images/profile2.webp"
                alt="Lucas Hackbart Döhnert"
                width={640}
                height={640}
                className="h-auto w-full object-cover grayscale-15"
                sizes="40vw"
                priority
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#211c17]">
              <span className="photo-corner photo-corner-tl" />
              <span className="photo-corner photo-corner-br" />

              <Image
                src="/images/profile.webp"
                alt="Lucas Hackbart Döhnert"
                width={640}
                height={640}
                className="h-auto w-full object-cover grayscale-15"
                sizes="40vw"
              />
            </div>
          </div>

          {/* Layout XL: sobreposição tipo baralho */}
          <div className="relative hidden h-[32rem] w-[28rem] xl:flex">
            {/* Primeira imagem - acima e à esquerda */}
            <div className="absolute -top-16 -left-16 z-20 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#211c17]">
              <span className="photo-corner photo-corner-tl" />
              <span className="photo-corner photo-corner-br" />

              <Image
                src="/images/profile2.webp"
                alt="Lucas Hackbart Döhnert"
                width={640}
                height={640}
                className="h-auto w-80 object-cover grayscale-15"
                sizes="20rem"
                priority
              />
            </div>

            {/* Segunda imagem - abaixo e à direita */}
            <div className="absolute right-0 bottom-0 z-10 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#211c17] shadow-lg shadow-black/40">
              <span className="photo-corner photo-corner-tl" />
              <span className="photo-corner photo-corner-br" />

              <Image
                src="/images/profile.webp"
                alt="Lucas Hackbart Döhnert"
                width={640}
                height={640}
                className="h-auto w-80 object-cover grayscale-15"
                sizes="20rem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
