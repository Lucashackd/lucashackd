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

function GuardianShowcase({ onNavigate }: GuardianShowcaseProps) {
  return (
    <section id="home" className="guardian-home" aria-label="ApresentaÃ§Ã£o inicial">
      <div className="guardian-home-atmosphere" aria-hidden="true" />
      <div className="guardian-home-art" role="img" aria-label="GuardiÃ£o em armadura de fantasia diante de ruÃ­nas iluminadas" />
      <div className="guardian-home-vignette" aria-hidden="true" />

      <div className="guardian-home-topline" aria-hidden="true">
        <span>REGISTRO DO VIAJANTE</span>
        <span cl¶»§q«^