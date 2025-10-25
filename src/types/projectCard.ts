import ProjectLink from "./projectLink";
import ProjectStack from "./projectStack";

interface ProjectCard {
  title: string;
  description: string;
  links: ProjectLink[];
  stack: ProjectStack[];
}

export default ProjectCard;