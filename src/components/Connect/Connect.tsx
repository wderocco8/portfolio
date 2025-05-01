import { IconType } from "react-icons";
import "./Connect.css";
import { SiCalendly } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

interface ConnectDataItem {
  text: string;
  url: string;
  icon: IconType;
  isEmail?: boolean;
}

/**
 * TODO: replace each `email`, `linkedin`, `github`, and `calendly`
 * with your personal information. You can delete whichever ones
 * you don't have.
 */
const connectData: ConnectDataItem[] = [
  {
    text: "Email",
    url: "wderocco@bu.edu",
    icon: MdAlternateEmail,
    isEmail: true,
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/william-derocco",
    icon: FaLinkedin,
  },
  {
    text: "GitHub",
    url: "https://github.com/wderocco8",
    icon: FaGithub,
  },
  {
    text: "Calendly",
    url: "https://calendly.com/williamderocco/networking_call",
    icon: SiCalendly,
  },
];

/**
 * `Connect` returns a unordered list (`ul`) of links. Be sure to
 * replace all of the information in the `connectData` above.
 */
export default function Connect() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" id="connect">
        Let's Connect
      </h2>
      <div className="connect-container">
        <p>Feel free to reach out through any of these platforms:</p>
        <ul className="connect-links">
          {connectData.map((item) => {
            const isEmail = item.isEmail;
            const href = isEmail ? `mailto:${item.url}` : item.url;
            const target = isEmail ? "_blank" : undefined;
            const rel = isEmail ? "noopener noreferrer" : undefined;

            return (
              <li>
                <a href={href} target={target} rel={rel}>
                  <div className="connect-link">
                    <item.icon />
                    {item.text}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
