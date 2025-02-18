import { Link } from "react-scroll";
import useActiveSection from "@/hooks/useActiveSection";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "now", label: "Projects" },
];

const Navbar = () => {
  const activeSection = useActiveSection(sections.map((s) => s.id));
  return (
    <nav className="w-full lg:flex hidden flex-col gap-3 mt-4 ">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          className={`text-gray-400 transition-all text-lg cursor-pointer px-3 py-1 rounded-md ${
            activeSection === section.id
              ? "text-gray-200 font-semibold bg-gradient-to-r from-primary/40 to-transparent"
              : "hover:text-gray-300"
          }`}
          smooth={true}
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
