import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa";
import { SiStackblitz } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/CagatayErsoy",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/cagatay-ersoy",
  },
  {
    name: "StackBlitz",
    icon: <SiStackblitz />,
    url: "https://stackblitz.com/@CagatayErsoy",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/your_instagram",
  },
  {
    name: "Resume",
    icon: <FaFileAlt />,
    url: "https://drive.google.com/file/d/1V82WN52FqDw6zLtsECVlF4zdzoTwSAA8/view?usp=sharing",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex space-x-4  ">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent-foreground transition-all text-2xl"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
