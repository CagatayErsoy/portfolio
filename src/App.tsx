import Now from "./components/Now";

import Summary from "./components/Summary";
// import ProfilePic from "./components/ProfilePic";
import Tittle from "./components/Tittle";
import Experience from "./components/Experience";

import SocialMedia from "./components/SocilaMedia";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex bg-slate-800 h-screen w-full text-secondary font-nunito overflow-hidden justify-end">
      {/* Fixed Sidebar */}
      <div className="w-2/5 flex flex-col gap-10 top-0 left-0 h-full justify-around  bg-slate-900 py-20 px-32">
        <Tittle />
        <Navbar></Navbar>
        <SocialMedia />
      </div>

      {/* Scrollable Content Section */}
      <div className="w-3/5 flex flex-col gap-10 h-full overflow-y-auto  scrollbar-hide  py-20 px-20 ">
        <Summary />
        <Experience />

        <Now />
      </div>
    </div>
  );
}

export default App;
