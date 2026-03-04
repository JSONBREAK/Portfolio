/**
 * Utility function to conditionally combine classNames
 * Similar to 'classnames' or 'clsx' library
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Merge multiple className strings safely
 */
export const mergeClasses = (base, conditional, additional = "") => {
  return cn(base, conditional, additional);
};
