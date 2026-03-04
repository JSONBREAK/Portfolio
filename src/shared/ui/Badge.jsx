import { memo } from 'react';
import { TRANSITIONS, SPACING } from '../constants/classNames';
import { cn } from '../utils/cn';

const VARIANT_STYLES = {
  default: "bg-gray-800 text-gray-300 border-gray-700",
  success: "bg-green-900/50 text-green-300 border-green-600",
  warning: "bg-yellow-900/50 text-yellow-300 border-yellow-600",
  error: "bg-red-900/50 text-red-300 border-red-600",
  info: "bg-blue-900/50 text-blue-300 border-blue-600",
};

const SIZE_STYLES = {
  sm: SPACING.xs + " text-xs",
  md: SPACING.sm + " text-sm",
  lg: SPACING.lg + " text-base",
};

const Badge = memo(function Badge({ label, variant = "default", size = "md", className = "" }) {
  const baseStyles = cn(
    "inline-block rounded-full border",
    TRANSITIONS.colors,
    className
  );

  return (
    <span className={cn(baseStyles, VARIANT_STYLES[variant], SIZE_STYLES[size])}>
      {label}
    </span>
  );
});

Badge.displayName = 'Badge';
export default Badge;
