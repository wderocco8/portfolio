import { IconType } from "react-icons";
import { SiCalendly } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
      <Card>
        <CardHeader>
          <h3 className="text-xl mx-auto ">
            Feel free to reach out, I'd love to chat!
          </h3>
        </CardHeader>
        <CardContent>
          <ul className="flex justify-center flex-wrap gap-8">
            {connectData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.isEmail ? `mailto:${item.url}` : item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:scale-105 transition"
                >
                  <item.icon />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
