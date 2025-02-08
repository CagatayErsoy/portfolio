import { useState, useEffect } from "react";

const useActiveSection = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = id;
          }
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    const scrollContainer = document.getElementById("content");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);
  return activeSection;
};

export default useActiveSection;
