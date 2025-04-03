import "./Connect.css";

interface ConnectData {
  email: string;
  linkedin: string;
  github?: string;
}

/**
 * TODO: replace each `email`, `linkedin`, and `github`
 * with your personal information.
 */
const connectData: ConnectData = {
  email: "wderocco@bu.edu",
  linkedin: "https://www.linkedin.com/in/william-derocco/",
  github: "https://github.com/wderocco8", // TODO: delete this line if you don't have a GitHub (or just create one 🤠)
};

/**
 * `Connect` returns a unordered list (`ul`) of links. Be sure to
 * replace all of the information in the `connectData` above.
 */
export default function Connect() {
  return (
    <>
      <h2 id="connect">Let's Connect</h2>
      <div className="connect-container">
        <p>Feel free to reach out through any of these platforms:</p>
        <ul className="connect-links">
          <li>
            <a href={`mailto:${connectData.email}`}>📧 Email</a>
          </li>
          {connectData.github && (
            <li>
              <a
                href={connectData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            </li>
          )}
          <li>
            <a
              href={connectData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
