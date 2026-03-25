import { memo, useState } from "react";
import { useScrollDetection } from "../../shared/hooks/useScrollDetection";
import { TRANSITIONS } from "../../shared/constants/classNames";
import { NAV_ITEMS } from "../../shared/constants/navigation";
import { cn } from "../../shared/utils/cn";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNav = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentSection, scrollToSection } = useScrollDetection(NAV_ITEMS);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-4 lg:hidden z-50">
        <div className="text-sm font-bold text-green-400">Portfolio</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-400 hover:text-green-400 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon 
            icon={isOpen ? faTimes : faBars} 
            className="text-xl"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 lg:hidden transition-opacity",
          TRANSITIONS.smooth,
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <nav
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-gray-950 border-r border-gray-800 lg:hidden pt-16 overflow-y-auto transition-transform",
          TRANSITIONS.smooth,
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-4 py-6 space-y-1">
          {NAV_ITEMS.map((nav) => {
            const isActive = currentSection === nav.sectionId;
            return (
              <button
                key={nav.sectionId}
                onClick={() => handleNavClick(nav.sectionId)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg font-medium transition-colors",
                  TRANSITIONS.smooth,
                  isActive
                    ? "text-green-400 bg-green-500/10 border-l-2 border-green-500"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border-l-2 border-transparent"
                )}
              >
                {nav.title}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
});

MobileNav.displayName = "MobileNav";
export default MobileNav;
