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
    <div className="p-4 transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:rounded-lg group flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_3fr]  items-start">
      {/* Date - Moves to top on mobile */}
      <div className="text-gray-500 text-sm font-semibold transition-all duration-300 group-hover:text-gray-300 sm:order-none order-first">
        {period}
      </div>

      {/* Right - Content */}
      <div className="flex flex-col">
        {/* Company Name (Red Accent on Hover) */}
        <h3 className="text-lg font-semibold text-foreground transition-all duration-300 group-hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
          {company}
        </h3>

        {/* Role */}
        <p className="text-gray-500 text-sm transition-all duration-300 group-hover:text-gray-400">
          {role}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 transition-all duration-300 group-hover:text-gray-300">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-accent text-accent-foreground px-2 py-1 text-xs rounded-md transition-all duration-300 group-hover:bg-primary group-hover:text-white"
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
