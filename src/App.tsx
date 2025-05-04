import About from "@/components/About/About";
import Activities from "@/components/Activities/Activities";
import Connect from "@/components/Connect/Connect";
import Navbar from "@/components/Navbar/Navbar";
import Profile from "@/components/Profile/Profile";
import Projects from "@/components/Projects/Projects";
import { ThemeProvider } from "@/providers/theme-provider";
import { fadeInTableRows } from "@/utils/fadeInTable";
import { initializeTilt } from "@/utils/tilt";

function App() {
  // Initialize card-tilt and table-fade effects on window load
  window.onload = () => {
    initializeTilt();
    fadeInTableRows();
  };

  return (
    <ThemeProvider>
      <Navbar />

      <div className="w-3/4 flex flex-col gap-12 mx-auto mt-56">
        {/* TODO: navigate to `components/Profile/Profile.tsx and update all TODO:s */}
        <Profile />

        <div className="content-separator"></div>

        {/* TODO: navigate to `components/About/About.tsx and update all TODO:s */}
        <About />

        <div className="content-separator"></div>

        {/* TODO: navigate to `components/Projects/Projects.tsx and update all TODO:s */}
        <Projects />

        <div className="content-separator"></div>

        {/* TODO: navigate to `components/Activities/Activities.tsx and update all TODO:s */}
        <Activities />

        <div className="content-separator"></div>

        {/* connect Section */}
        {/* TODO: navigate to `components/Connect/Connect.tsx and update all TODO:s */}
        <Connect />

        <div className="content-separator"></div>

        {/* TODO: navigate to `components/Chatbot/Chatbot.tsx and update all TODO:s */}
        {/* NOTE: Chatbot is inactive (not using OpenAPI token to save money, find a free alternaitve in the future) */}
        {/* <Chatbot /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
