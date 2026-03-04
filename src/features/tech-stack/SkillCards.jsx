import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CARD_BASE, CARD_HOVER } from "../../shared/constants/classNames";
import { cn } from "../../shared/utils/cn";

const SkillGrid = memo(function SkillGrid({ data = [] }) {
  return (
    <div className="space-y-4">
      {data.map((category) => (
        <div key={category.category} className={cn("rounded-lg", CARD_BASE, CARD_HOVER)}>
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-4">
            <FontAwesomeIcon
              icon={category.icon}
              className={`text-lg ${category.color}`}
            />
            <h3 className="text-sm font-medium text-gray-100 uppercase tracking-wide">
              {category.category}
            </h3>
          </div>

          {/* Items List */}
          <div className="flex flex-wrap gap-3">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="px-3 py-1.5 rounded border border-gray-700 text-xs text-gray-300 hover:text-gray-100 hover:border-gray-600 transition-colors"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

SkillGrid.displayName = "SkillGrid";
export default SkillGrid;
