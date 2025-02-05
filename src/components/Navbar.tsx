const sections = [
  { id: "about", label: "About" },
  { id: "now", label: "What I Am Cooking Now" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col gap-3 mt-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="text-gray-400 hover:text-white transition-all text-lg"
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
