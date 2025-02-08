import Now from "./components/Now";
import Summary from "./components/Summary";
import Tittle from "./components/Tittle";
import Experience from "./components/Experience";

import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="md:flex flex-col bg-slate-800 md:h-screen h-full w-full text-secondary font-nunito overflow-hidden justify-end ">
      {/* Sidebar (Fixed) */}
      <div className="lg:w-2/5 sm:w-full md:1/2 w-full flex flex-col gap-10 lg:fixed md:fixed relative top-0 left-0 h-full justify-around bg-slate-900 md:py-20 md:px-32 p-10 ">
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
