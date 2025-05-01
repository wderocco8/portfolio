import Typewriter from "typewriter-effect";
import "./Profile.css";

interface ProfileData {
  typewriter: string[];
  graduatingClass: number;
  majorMinor: string;
  websiteHref: string;
  imgSrc: string;
  currentPosition?: string;
}

/**
 * TODO: replace each `typewriterName`, `graduatingClass`, `majorMinor`,
 * `websiteHref`, and `imgSrc` with your personal information.
 */
const profileData: ProfileData = {
  typewriter: [
    "Heyo peeps, I'm Will.",
    "I love to learn.",
    "William De Rocco :)",
  ],
  graduatingClass: 2025,
  majorMinor: "B.A. in Computer Science, Minor in Economics",
  websiteHref: "https://github.com/wderocco8",
  imgSrc: "/images/profile/profile.jpeg",
  currentPosition: "Teaching Assistant for cs412 (Full-Stack Applications)",
};

/**
 * `Profile` returns info about yourself. Be sure to replace
 * all of the information in the `profileData` above.
 */
export default function Profile() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          <Typewriter
            options={{
              strings: profileData.typewriter,
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <ul className="[&>li]:py-2 [&>li]:border-b [&>li]:border-dotted [&>li]:border-foreground [&>li:last-child]:border-none">
          <li>Class of {profileData.graduatingClass}</li>
          <li>{profileData.majorMinor}</li>
          {profileData.currentPosition && (
            <li>{profileData.currentPosition}</li>
          )}
        </ul>
      </div>
      <div className="profile tilt">
        <a
          href={profileData.websiteHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-full border-4"
            src={profileData.imgSrc}
            alt="Profile picture."
          />
        </a>
      </div>
    </div>
  );
}
