interface NowCardProps {
  name: string;
  description: string;
  imageUrl: string;
  website: string;
}

const NowCard = ({ name, description, imageUrl, website }: NowCardProps) => {
  return (
    <div className="relative bg-zinc-900 text-foreground shadow-md p-6  transition-all duration-300 rounded-lg group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-red-900/30 before:opacity-0 hover:before:opacity-100 hover:shadow-lg hover:scale-[1.02] overflow-hidden">
      {/* Clickable Project Screenshot */}
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex lg:flex-row flex-col  gap-6 lg:items-start items-center"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-48 h-28 rounded-lg object-cover shadow-sm brightness-75 transition-all duration-300 group-hover:brightness-100"
        />
        <div className="flex-1 relative z-10">
          <h3 className="text-lg font-semibold text-gray-500 transition-all duration-300 group-hover:text-gray-200">
            {name}
          </h3>
          <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-300">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default NowCard;
