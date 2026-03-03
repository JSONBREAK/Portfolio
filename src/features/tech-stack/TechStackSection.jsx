import { techStackData } from "../../data/techStack";

export default function TechStackSection() {
  const levelStyles = {
    Basic: "text-amber-400",
    Intermediate: "text-blue-400",
    Advanced: "text-green-400",
  };

  const categories = [
    { key: "programming", label: "Programming Languages", icon: "💻" },
    { key: "frontend", label: "Frontend Development", icon: "🎨" },
    { key: "backend", label: "Backend Development", icon: "⚙️" },
    { key: "testing", label: "Testing & QA", icon: "🧪" },
    { key: "ci_cd", label: "CI/CD & DevOps", icon: "🚀" },
    { key: "tools", label: "Tools & Platforms", icon: "🛠️" },
  ];

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {categories.map((category) => (
          <div
            key={category.key}
            className="h-full border border-gray-700 bg-gray-900/30 rounded-lg p-4 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-gray-200 mb-3 flex items-center gap-2">
              <span>{category.icon}</span>
              {category.label}
            </h3>
            <div className="space-y-2">
              {(techStackData[category.key] || []).map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between text-gray-300 text-sm"
                >
                  <span>{tech.name}</span>
                  {tech.level && (
                    <span className={`text-xs ${levelStyles[tech.level]} px-2 py-1 rounded border border-gray-700`}>
                      {tech.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
