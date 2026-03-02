import { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");

  const navs = [
    { title: "About", sectionId: "About-section" },
    { title: "QA Manual", sectionId: "ManualTesting-section" },
    { title: "QA Automation", sectionId: "AutomationTesting-section" },
    { title: "GitHub", sectionId: "GitHub-section" },
  ];

  const handleScroll = useCallback(() => {
    if (window.scrollY < 8) {
      setCurrentSection("About-section");
      return;
    }

    let minDistance = Infinity;
    let closestSection = null;
    navs.forEach((nav) => {
      const section = document.getElementById(nav.sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = nav.sectionId;
        }
      }
    });
    if (closestSection) {
      setCurrentSection(closestSection);
    }
  }, [navs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClick = (sectionId) => {
    setCurrentSection(sectionId);
    if (sectionId === "About-section") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-col gap-2 mt-5 ml-5 hidden lg:block">
      {navs.map((nav, i) => (
        <div
          key={`nav-${nav.sectionId}-${i}`}
          onClick={() => handleClick(nav.sectionId)}
          className={`cursor-pointer text-sm transition-colors duration-200 ${
            currentSection === nav.sectionId
              ? "text-green-400 font-medium"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {nav.title}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
