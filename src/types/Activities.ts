export interface Activity {
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
