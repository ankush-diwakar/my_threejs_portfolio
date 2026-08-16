import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExitingLoader, setIsExitingLoader] = useState(false);

  useEffect(() => {
    const clickSound = new Audio("/click.mp3");
    clickSound.preload = "auto";

    const playClickSound = () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    };

    document.addEventListener("click", playClickSound);

    return () => {
      document.removeEventListener("click", playClickSound);
      clickSound.pause();
      clickSound.src = "";
    };
  }, []);

  useEffect(() => {
    const startExitTimeout = window.setTimeout(() => {
      setIsExitingLoader(true);
    }, 1100);

    const removeLoaderTimeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => {
      window.clearTimeout(startExitTimeout);
      window.clearTimeout(removeLoaderTimeout);
    };
  }, []);

  return (
    <div className="app-root">
      {isLoading && (
        <div
          className={`initial-loader ${isExitingLoader ? "initial-loader--exit" : ""}`}
          aria-hidden="true"
        >
          <img
            src="/favlogo.png"
            alt="Ankush logo"
            className="initial-loader__logo"
          />
        </div>
      )}
      <main className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <ContactMe />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </div>
  );
};

export default App;
