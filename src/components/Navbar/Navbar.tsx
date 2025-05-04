import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

// TODO: add/remove links as needed
const navLinks: NavLink[] = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#interests", label: "Interests" },
  { href: "#connect", label: "Connect" },
];

/**
 * `Navbar` returns an unordered list of navbar items. You
 * don't need to modify this unless you want to change the
 * section names.
 */
export default function Navbar() {
  const [visible, setVisible] = useState(true); // State to control visibility of navbar

  useEffect(() => {
    let lastScrollY = 0; // To track the last scroll position

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY; // Prevent negative values
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <nav
      className={`sticky top-4 mx-auto w-fit z-50 transition-transform duration-700 ${
        visible ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
      } backdrop-blur-md rounded-lg px-6 py-4 bg-background/50
      }`}
    >
      <ul className="flex justify-center gap-8 flex-wrap">
        {navLinks.map(({ href, label }, index) => (
          <li key={index} className="hover:scale-105 transition">
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
