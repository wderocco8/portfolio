import { JSX } from "react";

interface AboutData {
  info: JSX.Element;
}

/**
 * TODO: replace `info` with your personal information.
 */
const aboutData: AboutData = {
  info: (
    <div className="space-y-4">
      <p>
        Hello there, my name is Will, and I'm originally from Manhattan,
        although I have lived in a few other cities, my family has found our way
        back there yet again! Currently, I'm a senior and aspiring software
        engineer studying at Boston University.
      </p>
      <p>
        I absolutely love learning new skills and challenging myself in
        different respects. To learn more about what I've been working on, feel
        free to check out my <a href="https://github.com/wderocco8">GitHub</a>{" "}
        😁.
      </p>
    </div>
  ),
};

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" id="about">About me</h2>
      {aboutData.info}
    </div>
  );
}
