import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");

  const navs = [
    { title: "About", sectionId: "About-section" },
    { title: "Project", sectionId: "Project-section" },
    { title: "Learning & Research", sectionId: "LearningAndResearch-section" },
    { title: "To-Do List", sectionId: "ToDo-section" },
  ];

  const handleScroll = useCallback(() => {
    // ถ้า scroll อยู่ที่ตำแหน่ง < 8 ให้ currentSection เป็น About-section
    if (window.scrollY < 8) {
      setCurrentSection("About-section");
      return;
    }

    // หา section ที่อยู่ใกล้ขอบบนของ viewport ที่สุด
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
    // เมื่อคลิกที่ About หรือ section อื่นๆ
    setCurrentSection(sectionId);

    // ถ้าคลิกที่ "About", ให้ scroll ไปที่ตำแหน่ง 0 (หรือ < 7)
    if (sectionId === "About-section") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // ทำให้ scroll ไปยัง section ที่คลิก
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col font-semibold mt-7 ml-5 hidden lg:block">
      {navs.map((e, i) => (
        <div
          key={`nav-${e.sectionId}-${i}`}
          onClick={() => handleClick(e.sectionId)}
          className={`cursor-pointer flex py-2 ${currentSection === e.sectionId ? "text-green-500" : ""}`}
        >
          <div>
            {currentSection === e.sectionId && (
              <FontAwesomeIcon className="mr-2 text-green-500" icon={faArrowRight} />
            )}
          </div>
          <div className={`duration-300 ease-out ${currentSection === e.sectionId ? "translate-x-3 text-green-500" : ""}`}>
            {e.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
