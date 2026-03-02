import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillSection = ({ data }) => {
  return (
    <div className="grid gap-6 px-5 mb-8">
      {data.map((category, idx) => (
        <div key={idx} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition">
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-4">
            <FontAwesomeIcon
              icon={category.icon}
              className={`text-xl ${category.color}`}
            />
            <h3 className="text-lg font-semibold text-white">{category.category}</h3>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded px-3 py-2 border border-gray-700 hover:border-gray-500 transition flex items-center gap-2 text-sm"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-gray-400 text-xs"
                />
                <span className="text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
