import { useEffect, useState } from "react";
import "./Navbar.css"

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
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#interests">Interests</a>
        </li>
        <li>
          <a href="#connect">Connect</a>
        </li>
        {/* Chatbot is inactive (not using OpenAPI token to save money, find a free alternaitve in the future) */}
        {/* <li>
          <a href="#chatbot">Chatbot</a>
        </li> */}
      </ul>
    </nav>
  );
}
