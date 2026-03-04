import { memo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CARD_BASE, CARD_HOVER, SKILL_ITEM } from "../constants/classNames";
import { cn } from "../utils/cn";

const SkillGrid = memo(function SkillGrid({ data = [] }) {
  return (
    <div className="space-y-3">
      {data.map((category, idx) => (
        <div key={idx} className={cn("rounded-lg", CARD_BASE, CARD_HOVER)}>
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-3">
            <FontAwesomeIcon
              icon={category.icon}
              className={`text-lg ${category.color}`}
            />
            <h3 className="font-semibold text-gray-100 tracking-wide">{category.category}</h3>
          </div>
          <div className="h-px bg-gray-800 mb-3" />

          {/* Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {category.items.map((item) => (
              <div
                key={item.name}
                className={cn(SKILL_ITEM, "flex items-center gap-2 text-sm group group-hover:translate-x-1 transition-transform")}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-gray-500 text-xs group-hover:text-gray-400 transition"
                />
                <span className="text-gray-300 group-hover:text-gray-200 transition">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

SkillGrid.displayName = 'SkillGrid';
export default SkillGrid;
