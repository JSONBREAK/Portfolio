// Common Tailwind CSS class patterns
export const TRANSITIONS = {
  all: "transition-all",
  colors: "transition-colors",
  duration200: "duration-200",
  duration300: "duration-300",
  smooth: "transition-all duration-300",
  fast: "transition-all duration-200",
};

export const BORDERS = {
  card: "border border-gray-700",
  accent: "border-green-500",
  subtle: "border-gray-200/50 dark:border-gray-700/50",
};

export const BG_COLORS = {
  card: "bg-gray-900/30",
  cardHover: "hover:bg-gray-800/50",
  green: "bg-green-500/10",
};

export const TEXT_COLORS = {
  muted: "text-gray-500",
  primary: "text-gray-200",
  green: "text-green-400",
  greenHover: "hover:text-green-400",
};

export const SPACING = {
  xs: "px-2 py-0.5",
  sm: "px-3 py-1",
  md: "px-3 py-2",
  lg: "px-4 py-1.5",
};

export const ROUNDED = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const CARD_BASE = `${BORDERS.card} ${BG_COLORS.card} ${TRANSITIONS.fast} p-4`;
export const CARD_HOVER = `${BG_COLORS.cardHover} hover:border-gray-600`;
export const CARD_INTERACTIVE = `${CARD_BASE} ${CARD_HOVER} cursor-pointer`;

// Feature-specific colors
export const LEVEL_COLORS = {
  Basic: "text-amber-400",
  Intermediate: "text-blue-400",
  Advanced: "text-green-400",
};

export const TECH_COLORS = {
  yellow: "text-yellow-400",
  blue: "text-blue-400",
  green: "text-green-400",
  purple: "text-purple-400",
  red: "text-red-400",
  pink: "text-pink-400",
};

// Component-specific patterns
export const BADGE_BASE = "px-2 py-1 rounded border border-gray-700 text-xs";
export const TOPIC_BADGE = `${SPACING.xs} rounded-full text-xs bg-gray-800 text-gray-300 border border-gray-700`;
export const SKILL_ITEM = `rounded px-3 py-2 border border-gray-700 hover:border-gray-600 ${TRANSITIONS.all} bg-gray-900/50`;
