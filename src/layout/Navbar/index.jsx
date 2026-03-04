import { memo } from "react";
import { useScrollDetection } from "../../shared/hooks/useScrollDetection";
import { TRANSITIONS } from "../../shared/constants/classNames";
import { cn } from "../../shared/utils/cn";

const NAV_ITEMS = [
  { title: "About", sectionId: "About-section" },
  { title: "QA Manual", sectionId: "ManualTesting-section" },
  { title: "QA Automation", sectionId: "AutomationTesting-section" },
  { title: "GitHub", sectionId: "GitHub-section" },
];

const Navbar = memo(() => {
  const { currentSection, scrollToSection } = useScrollDetection(NAV_ITEMS);

  return (
    <nav className="flex flex-col gap-3 mt-5 ml-5 hidden lg:block">
      {NAV_ITEMS.map((nav) => {
        const isActive = currentSection === nav.sectionId;
        return (
          <div
            key={nav.sectionId}
            onClick={() => scrollToSection(nav.sectionId)}
            className={cn(
              "cursor-pointer text-sm font-medium py-1.5 px-3 rounded-md",
              TRANSITIONS.smooth,
              isActive
                ? "text-green-500 dark:text-green-400 bg-green-500/10 dark:bg-green-400/10"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            )}
          >
            {nav.title}
          </div>
        );
      })}
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
