import { JSX } from "react";

export interface ActivityProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: JSX.Element;
  quicklinks: Quicklink[];
}

interface Quicklink {
  href: string;
  name: string;
}

/**
 * `Activity` is a generic component to render
 * the activity information defined in `Activities.tsx`
 *
 * DO NOT MODIFY THIS COMPONENT (unless you want to expieriment 🌝)
 */
export default function Activity({
  imgSrc,
  imgAlt,
  title,
  description,
  quicklinks,
}: ActivityProps) {
  return (
    <tr>
      <td>
        <img src={imgSrc} alt={imgAlt} />
      </td>
      <td>
        <h3>{title}</h3>
        {description}
      </td>
      <td>
        <h3>Quicklinks</h3>
        <ul>
          {quicklinks.map((quicklink, index) => (
            <a
              key={index}
              href={quicklink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{quicklink.name}</li>
            </a>
          ))}
        </ul>
      </td>
    </tr>
  );
}
