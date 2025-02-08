import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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
];

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition-all text-2xl"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
