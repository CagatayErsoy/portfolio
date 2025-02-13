import Now from "./components/Now";
import Summary from "./components/Summary";
import Tittle from "./components/Tittle";
import Experience from "./components/Experience";

import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import { useState, useEffect } from "react";

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="md:flex flex-col bg-zinc-900 md:h-screen h-full w-full text-gray-300 font-nunito overflow-hidden justify-end "
      style={{
        background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8))`,
      }}
    >
      {/* Sidebar (Fixed) */}
      <div className="lg:w-2/5 sm:w-full md:1/2 w-full flex flex-col gap-10 lg:fixed md:fixed relative top-0 left-0 h-full justify-around xs md:py-20 md:px-32 p-10 ">
        <Tittle />
        <Navbar />
        <SocialMedia />
      </div>

      {/* ✅ Scrollable Content Section */}
      <div
        id="content"
        className="lg:w-3/5 sm:w-full md:1/2 w-full flex flex-col gap-10 h-full overflow-y-auto scrollbar-hide py-20 px-20 ml-auto"
      >
        <section id="about">
          <Summary />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="now">
          <Now />
        </section>
      </div>
    </div>
  );
}

export default App;
