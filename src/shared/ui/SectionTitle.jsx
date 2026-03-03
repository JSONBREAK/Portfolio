/**
 * SectionTitle Component - Consistent section heading with description
 * 
 * Props:
 * - title: string - Main heading text
 * - description: string (optional) - Subtitle/description text
 * - className: string (optional) - Additional styling
 */
export default function SectionTitle({ title, description, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-xs">
          {description}
        </p>
      )}
    </div>
  );
}
