import React from "react";
import ExperienceCard from "./ExperienceCard";
import experience from "@/data/experience";

const Experience = () => {
  return (
    <div className="text-4xl space-y-6">
      {experience.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
