"use client";

import Image from "next/image";
import { ArrowRight, Code2, Compass, Sparkles } from "lucide-react";

type GuardianShowcaseProps = {
  onNavigate: (sectionId: string) => void;
};

const attributes = [
  { label: "JavaScript", value: 85 },
  { label: "Node.js", value: 70 },
  { label: "React", value: 80 },
  { label: "MySQL", value: 90 },
  { label: "Laravel", value: 80 },
];

const technologies = [
  { name: "React", src: "/images/React.svg" },
  { name: "JavaScript", src: "/images/Javascript.svg" },
  { name: "TypeScript", src: "/images/TypeScript.svg" },
  { name: "Node.js", src: "/images/NodeJs.svg" },
  { name: "Laravel", src: "/images/Laravel.svg" },
  { name: "PostgreSQL", src: "/images/PostgreSQL.svg" },
  { name: "MySQL", src: "/images/MySQL.svg" },
  { name: "Firebase", src: "/images/Firebase.svg" },
  { name: "Docker", src: "/images/Docker.svg" },
  { name: "Amazon S3", src: "/images/AmazonS3.svg" },
];

export default function GuardianShowcase({ onNavigate }: GuardianShowcaseProps) {
  return (
    <section id="home" className="guardian-home" aria-label="Apresentação inicial">
      <div className="guardian-home-atmosphere" aria-hidden="true" />
      <div className="guardian-home-art" role="img" aria-label="Guardião em armadura de fantasia diante de ruínas iluminadas" />
      <div className="guardian-home-vignette" aria-hidden="true" />

      <div className="guardian-home-topline" aria-hidden="true">
        <span>REGISTRO DO VIAJANTE</span>
        <span className="guardian-topline-mark">✦</span>
        <span>REINO DIGITAL · 2026</span>
      </div>

      <div className="guardian-profile-panel">
        <div className="guardian-panel-frame" aria-hidden="true" />
        <div className="guardian-profile-heading">
          <span className="guardian-profile-kicker">O GUARDIÃO DO CÓDIGO</span>
          <h1>Lucas <span>Hackd</span></h1>
          <p>Desenvolvedor Full Stack</p>
        </div>

        <div className="guardian-panel-divider"><span>✧</span></div>

        <p className="guardian-profile-description">
          Transformando ideias em soluções com código, tecnologia e paixão por games e inovação.
        </p>

        <div className="guardian-section-title">
          <Sparkles size={19} strokeWidth={1.5} />
          <span>ATRIBUTOS</span>
          <i />
        </div>

        <div className="guardian-attributes">
          {attributes.map((attribute) => (
            <div className="guardian-attribute" key={attribute.label}>
              <span>{attribute.label}</span>
              <div
                className="guardian-attribute-track"
                role="meter"
                aria-label={attribute.label}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={attribute.value}
              >
                <i style={{ width: `${attribute.value}%` }} />
              </div>
              <strong>{attribute.value}%</strong>
            </div>
          ))}
        </div>

        <div className="guardian-section-title guardian-tech-title">
          <Code2 size={19} strokeWidth={1.5} />
          <span>TECNOLOGIAS PRINCIPAIS</span>
          <i />
        </div>

        <div className="guardian-tech-grid">
          {technologies.map((technology) => (
            <div className="guardian-tech-item" key={technology.name} title={technology.name}>
              <Image src={technology.src} alt={technology.name} width={28} height={28} />
            </div>
          ))}
        </div>

        <button type="button" className="guardian-project-button" onClick={() => onNavigate("projects")}>
          <span className="guardian-button-sigil">✧</span>
          <span>Ver Projetos</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="guardian-quote">
        <Compass size={17} strokeWidth={1.4} />
        <p>Grandes conquistas<br />começam com um bom código.</p>
        <span>— UMA JORNADA EM CONSTRUÇÃO —</span>
      </div>
    </section>
  );
}
