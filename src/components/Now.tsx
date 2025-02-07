import NowCard from "./NowCard";
import nowData from "@/data/nowData";

const Now = () => {
  return (
    <div className="text-4xl space-y-6">
      <h3 className="mb-4 font-bold text-white">What I am working on now</h3>
      {nowData.map((project, index) => (
        <NowCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Now;
