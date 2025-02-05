interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
}

const ExperienceCard = ({
  company,
  role,
  period,
  description,
  techStack,
}: ExperienceCardProps) => {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-6 items-start p-4 transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:rounded-lg group">
      {/* Left - Date */}
      <div className="text-gray-500 text-sm font-semibold transition-all duration-300 group-hover:text-gray-300">
        {period}
      </div>

      {/* Right - Content */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-400 transition-all duration-300 group-hover:text-white">
          {company}
        </h3>
        <p className="text-gray-500 text-sm transition-all duration-300 group-hover:text-gray-400">
          {role}
        </p>
        <p className="text-sm text-gray-500 mt-2 transition-all duration-300 group-hover:text-gray-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded-md transition-all duration-300 group-hover:bg-slate-600 group-hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
