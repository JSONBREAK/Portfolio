import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../utils/cn";

/**
 * CategoryHeader component for displaying category icon and label
 * Reusable pattern used in SkillGrid and TechStack
 */
const CategoryHeader = memo(function CategoryHeader({
  icon,
  label,
  color = "text-gray-100",
  className = "",
  iconClassName = "text-lg"
}) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={cn("flex-shrink-0", iconClassName, color)}
          aria-hidden="true"
        />
      )}
      <h3 className={cn("font-medium text-gray-100 uppercase tracking-wide text-sm")}>
        {label}
      </h3>
    </div>
  );
});

CategoryHeader.displayName = "CategoryHeader";
export default CategoryHeader;
