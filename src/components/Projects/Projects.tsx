import Project, { ProjectProps } from "./Project";
import "./Projects.css";

/**
 * TODO: replace each `websiteHref`, `imgSrc`, `title`, and `description`
 * with your project information.
 */
const projects: ProjectProps[] = [
  // Project 1
  {
    websiteHref: "https://github.com/wderocco8/Grub-Gallery",
    imgSrc: "/images/projects/project1.jpeg",
    title: "Grub Gallery",
    description:
      "Grub Gallery is a dynamic web application built using the MERN stack, integrating Google OAuth, Spoonacular API, and Google Calendar API. This project allows users to discover and personalize dishes and recipes effortlessly.",
  },
  // Project 2
  {
    websiteHref: "https://github.com/wderocco8/ZipSurf",
    imgSrc: "/images/projects/project2.jpeg",
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
    <>
      <h2 id="projects">Projects</h2>
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
    </>
  );
}
