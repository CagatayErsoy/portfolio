import { Link } from "react-scroll";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "now", label: "What I Am Cooking Now" },
];

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col gap-3 mt-4">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          className="text-gray-400 hover:text-white transition-all text-lg cursor-pointer"
          smooth={true}
          activeClass="active"
          spy={true}
          duration={500}
          offset={-50}
          containerId="content"
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
