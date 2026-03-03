/**
 * Badge Component - Reusable badge/label component
 * 
 * Props:
 * - label: string - Badge text
 * - variant: 'default' | 'success' | 'warning' | 'error' | 'info' (optional, default 'default')
 * - size: 'sm' | 'md' | 'lg' (optional, default 'md')
 * - className: string (optional) - Additional styling
 */
export default function Badge({ label, variant = "default", size = "md", className = "" }) {
  const baseStyles = "inline-block rounded-full border transition-colors";
  
  const variantStyles = {
    default: "bg-gray-800 text-gray-300 border-gray-700",
    success: "bg-green-900/50 text-green-300 border-green-600",
    warning: "bg-yellow-900/50 text-yellow-300 border-yellow-600",
    error: "bg-red-900/50 text-red-300 border-red-600",
    info: "bg-blue-900/50 text-blue-300 border-blue-600",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {label}
    </span>
  );
}
