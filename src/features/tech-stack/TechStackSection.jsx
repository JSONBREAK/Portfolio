import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faCog, faLaptop, faCode, faServer, faTools } from "@fortawesome/free-solid-svg-icons";
import { techStackData } from "../../data/techStack";
import { CARD_BASE, CARD_HOVER } from "../../shared/constants/classNames";
import { cn } from "../../shared/utils/cn";

const TECH_CATEGORIES = [
  { key: "programming", label: "Programming", icon: faLaptop, color: "text-green-400" },
  { key: "frontend", label: "Frontend", icon: faCode, color: "text-blue-400" },
  { key: "backend", label: "Backend", icon: faServer, color: "text-purple-400" },
  { key: "testing", label: "Test Automation", icon: faFlask, color: "text-yellow-400" },
  { key: "ci_cd", label: "CI/CD", icon: faCog, color: "text-orange-400" },
  { key: "tools", label: "Tooling", icon: faTools, color: "text-gray-300" },
];

const TechStackSection = memo(function TechStackSection() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-1">
          Technical Stack
        </h2>
        <p className="text-gray-500 text-sm">Core technologies and tools for QA automation, CI/CD, and web development.</p>
      </div>

      <div className="space-y-4">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.key}
            className={cn("rounded-lg", CARD_BASE, CARD_HOVER)}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={category.icon}
                className={`text-lg ${category.color}`}
              />
              <h3 className="text-sm font-medium text-gray-100 uppercase tracking-wide">
                {category.label}
              </h3>
            </div>

            {/* Items List */}
            <div className="flex flex-wrap gap-2">
              {(techStackData[category.key] || []).map((tech) => (
                <div
                  key={tech.name}
                  className="px-3 py-1.5 rounded border border-gray-700 text-xs text-gray-300 hover:text-gray-100 hover:border-gray-600 transition-colors"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default TechStackSection;
