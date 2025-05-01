import Project, { ProjectProps } from "./Project";
import "./Projects.css";

/**
 * TODO: replace each `websiteHref`, `imgSrc`, `title`, and `description`
 * with your project information.
 */
const projects: ProjectProps[] = [
  // Project 1
  {
    websiteHref: "https://github.com/whyphi",
    imgSrc: "/images/projects/project1.jpeg",
    title: "WhyPhi",
    description:
      "WhyPhi is an all-in-one attendance and application management software that a few friends and I helped develop for my Business Fraternity (PCT). Since its creation, we have reached 70+ internal users and an additional 200+ external users.",
  },
  // Project 2
  {
    websiteHref: "https://github.com/Spark-Project-Pulse",
    imgSrc: "/images/projects/project2.jpeg",
    title: "CodeHive",
    description:
      "CodeHive is a platform which aims to help aspiring developers get contextual feedback on their questions/projects by linking source code directly to their questions.",
  },
  // Project 3
  {
    websiteHref: "https://github.com/wderocco8/Grub-Gallery",
    imgSrc: "/images/projects/project3.jpeg",
    title: "Grub Gallery",
    description:
      "Grub Gallery is a dynamic web application built using the MERN stack, integrating Google OAuth, Spoonacular API, and Google Calendar API. This project allows users to discover and personalize dishes and recipes effortlessly.",
  },
  // Project 4
  {
    websiteHref: "https://github.com/wderocco8/ZipSurf",
    imgSrc: "/images/projects/project4.jpeg",
    title: "ZipSurf",
    description:
      "ZipSurf is a React based web application designed to enabling users to create, save, delete, and export shortened URLs.",
  },
];

/**
 * `Projects` returns a list of `Project` components,
 * defined in the following component. Be sure to replace
 * all of the information in this file (do not edit `Project.tsx`
 * only edit the list of `projects` above).
 */
export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" id="projects">
        Projects
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            websiteHref={project.websiteHref}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
