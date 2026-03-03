/**
 * Card Component - Reusable card wrapper for consistent styling
 * 
 * Props:
 * - children: ReactNode
 * - className: string (optional, for additional styling)
 * - hover: boolean (optional, default true - adds hover effects)
 */
export default function Card({ children, className = "", hover = true }) {
  const baseStyles = "rounded-lg border border-gray-700 bg-gray-900/30 p-4";
  const hoverStyles = hover ? "hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-200" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
