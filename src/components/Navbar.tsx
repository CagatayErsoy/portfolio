import { Link } from "react-scroll";
import useActiveSection from "@/hooks/useActiveSection";
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "now", label: "What I Am Cooking Now" },
];

const Navbar = () => {
  const activeSection = useActiveSection(sections.map((s) => s.id));
  return (
    <nav className="w-full md:flex hidden flex-col gap-3 mt-4 ">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          className={`text-gray-400  transition-all text-lg cursor-pointer ${
            activeSection === section.id ? "text-white font-bold" : ""
          }`}
          smooth={true}
          spy={true}
          activeClass="text-white font-bold text-lg"
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
