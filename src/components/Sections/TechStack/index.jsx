import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillSection = ({ data }) => {
  return (
    <div className="space-y-3">
      {data.map((category, idx) => (
        <div key={idx} className="rounded-lg border border-gray-700 bg-gray-900/30 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-200 p-4">
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-3">
            <FontAwesomeIcon
              icon={category.icon}
              className={`text-lg ${category.color}`}
            />
            <h3 className="font-semibold text-gray-200">{category.category}</h3>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="rounded px-3 py-2 border border-gray-700 hover:border-gray-600 transition bg-gray-900/50 flex items-center gap-2 text-sm group"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-gray-500 text-xs group-hover:text-gray-400 transition"
                />
                <span className="text-gray-300 group-hover:text-gray-200 transition">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
