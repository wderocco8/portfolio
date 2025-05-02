import { useTheme } from "@/providers/theme-provider";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  const { resolvedTheme } = useTheme();

  const finalImgSrc = (() => {
    const dotIndex = imgSrc.lastIndexOf(".");
    if (resolvedTheme === "dark" && dotIndex !== -1) {
      return imgSrc.slice(0, dotIndex) + "-dark" + imgSrc.slice(dotIndex);
    }
    return imgSrc;
  })();

  return (
    <a
      href={websiteHref}
      target="_blank"
      rel="noopener noreferrer"
      className="tilt tilt-small"
    >
      <Card className="h-full p-4">
        <div className="rounded-lg overflow-hidden">
          <img src={finalImgSrc} alt={title} className="w-full object-cover" />
        </div>
        <CardHeader className="p-0 pt-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
}
