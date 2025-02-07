import Now from "./components/Now";
import { Element, Events } from "react-scroll";
import Summary from "./components/Summary";
import Tittle from "./components/Tittle";
import Experience from "./components/Experience";

import Navbar from "./components/Navbar";
import { useEffect } from "react";
import SocialMedia from "./components/SocilaMedia";

function App() {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });
  }, []);

  return (
    <div className="flex bg-slate-800 h-screen w-full text-secondary font-nunito overflow-hidden justify-end">
      {/* Sidebar (Fixed) */}
      <div className="w-2/5 flex flex-col gap-10 top-0 left-0 h-full justify-around bg-slate-900 py-20 px-32">
        <Tittle />
        <Navbar />
        <SocialMedia />
      </div>

      {/* Scrollable Content Section */}
      <div
        id="content" // 💡 Add this to match `containerId="content"`
        className="w-3/5 flex flex-col gap-10 h-full overflow-y-auto scrollbar-hide py-20 px-20"
      >
        <Element name="about">
          <Summary />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="now">
          <Now />
        </Element>
      </div>
    </div>
  );
}

export default App;
