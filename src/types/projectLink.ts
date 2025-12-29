interface ProjectLink {
  type: "video" | "website" | "github";
  url: URL;
}

export const MyComedyTubeLinks: ProjectLink[] = [
  {
    type: "website",
    url: new URL("https://my-comedy-tube-3a891e3a55ba.herokuapp.com/"),
  },
];

export const RealStateLinks: ProjectLink[] = [
  {
    type: "website",
    url: new URL("https://imobiliaria-sistema-de-gestao.vercel.app/"),
  },
  {
    type: "github",
    url: new URL("https://github.com/Lucashackd/Imobiliaria-Sistema-de-Gestao"),
  },
];

export default ProjectLink;
