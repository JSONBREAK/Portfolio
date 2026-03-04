import { memo } from "react";
import { techStackData } from "../../data/techStack";
import { LEVEL_COLORS, BADGE_BASE, CARD_BASE, CARD_HOVER } from "../../shared/constants/classNames";
import { cn } from "../../shared/utils/cn";

const CATEGORIES = [
  { key: "programming", label: "Programming Languages", icon: "💻" },
  { key: "frontend", label: "Frontend Development", icon: "🎨" },
  { key: "backend", label: "Backend Development", icon: "⚙️" },
  { key: "testing", label: "Testing & QA", icon: "🧪" },
  { key: "ci_cd", label: "CI/CD & DevOps", icon: "🚀" },
  { key: "tools", label: "Tools & Platforms", icon: "🛠️" },
];

const TechStackSection = memo(function TechStackSection() {

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {CATEGORIES.map((category) => (
          <div
            key={category.key}
            className={cn("h-full rounded-lg", CARD_BASE, CARD_HOVER)}
          >
            <h3 className="text-base font-semibold text-gray-200 mb-3 flex items-center gap-2">
              <span>{category.icon}</span>
              {category.label}
            </h3>
            <div className="space-y-2">
              {(techStackData[category.key] || []).map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between text-gray-300 text-sm"
                >
                  <span>{tech.name}</span>
                  {tech.level && (
                    <span className={cn(BADGE_BASE, LEVEL_COLORS[tech.level])}>
                      {tech.level}
                    </span>
                  )}
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
