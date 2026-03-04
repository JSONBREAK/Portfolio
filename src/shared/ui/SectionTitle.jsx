import { memo } from 'react';

const SectionTitle = memo(function SectionTitle({ title, description, className = "" }) {
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
});

SectionTitle.displayName = 'SectionTitle';
export default SectionTitle;
