import ExperienceCard from "./ExperienceCard";
import experience from "@/data/experience";

const Experience = () => {
  return (
    <div className="text-2xl lg:space-y-6 space-y-2">
      <h3 className="font-bold lg:hidden ml-4">Experience</h3>
      {experience.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
