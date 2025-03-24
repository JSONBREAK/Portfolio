import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const navs = [
  { title: "About", selectID: "About-section" },
  { title: "Experience", selectID: "Experience-section" },
  { title: "Project", selectID: "Project-section" },
  { title: "Article", selectID: "Article-section" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navs.forEach((nav) => {
      const element = document.getElementById(nav.selectID);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-primary px-6 py-4 hidden md:block sticky">
      <ul className="flex flex-col space-y-2">
        {navs.map((nav) => (
          <li key={nav.selectID}>
            <button
              onClick={() => handleClick(nav.selectID)}
              className={`flex items-center ${
                activeSection === nav.selectID
                  ? "text-green-300 scale-110" // ใช้สีเขียวอ่อนเมื่อ active
                  : "text-gray-500 hover:text-green-100 hover:scale-105" // ใช้สีเขียวอ่อนสุดเมื่อไม่ active
              } font-semibold transition-all duration-300 ease-out`}
            >
              {activeSection === nav.selectID && (
                <FontAwesomeIcon className="mr-2 text-xs" icon={faArrowRight} />
              )}
              {nav.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
