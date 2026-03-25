import { memo } from "react";
import { TECH_CATEGORIES } from "../../shared/constants/techStack";
import { techStackData } from "../../data/techStack";
import { CARD_BASE, CARD_HOVER } from "../../shared/constants/classNames";
import { cn } from "../../shared/utils/cn";
import SectionTitle from "../../shared/ui/SectionTitle";
import CategoryHeader from "../../shared/ui/CategoryHeader";

const TechStackSection = memo(function TechStackSection() {
  return (
    <section>
      <SectionTitle 
        title="Technical Stack" 
        description="Core technologies and tools for QA automation, CI/CD, and web development."
      />

      <div className="space-y-4">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.key}
            className={cn("rounded-lg", CARD_BASE, CARD_HOVER)}
          >
            {/* Category Header */}
            <CategoryHeader 
              icon={category.icon} 
              label={category.label}
              color={category.color}
            />

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
