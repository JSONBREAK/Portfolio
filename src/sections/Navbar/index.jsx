import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");

  const navs = [
    { title: "About", sectionId: "About-section" },
    { title: "Experience", sectionId: "Experience-section" },
    { title: "Project", sectionId: "Project-section" },
    { title: "Article", sectionId: "Article-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // ถ้า scroll อยู่ที่ตำแหน่ง < 8 ให้ currentSection เป็น About-section
      if (window.scrollY < 8) {
        setCurrentSection("About-section");
        return;
      }

      // ตรวจสอบว่า scroll อยู่ในช่วงของ section นี้
      navs.forEach((nav) => {
        const section = document.getElementById(nav.sectionId);
        if (section) {
          const { offsetTop, clientHeight } = section;
          if (
            window.scrollY >= offsetTop - clientHeight / 2 &&
            window.scrollY < offsetTop + clientHeight - clientHeight / 2
          ) {
            setCurrentSection(nav.sectionId); // เปลี่ยน currentSection
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navs]);

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
    <div className="flex flex-col font-semibold mt-7 ml-5">
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
