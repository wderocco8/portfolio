export interface ProjectProps {
  websiteHref: string;
  imgSrc: string;
  title: string;
  description: string;
}

/**
 * `Project` is a generic component to render
 * the project information defined in `Projects.tsx`
 *
 * DO NOT MODIFY THIS COMPONENT (unless you want to expieriment 🌝)
 */
export default function Project({
  websiteHref,
  imgSrc,
  title,
  description,
}: ProjectProps) {
  return (
    <a
      href={websiteHref}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link tilt tilt-small"
    >
      <div className="project">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
