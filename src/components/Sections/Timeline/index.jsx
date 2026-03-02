import { timelineData } from "../../../constants/timeline";

const Timeline = () => {
  return (
    <div className="mb-8">
      {/* Timeline - Milestones Heading */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-1">
          Milestones
        </h2>
        <p className="text-gray-500 text-xs">
          Key learning stages from CPE fundamentals through QA mastery to DevOps excellence.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden md:block" />

        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-0 w-12 h-12 bg-gray-900 border-2 border-green-500 rounded-full flex items-center justify-center text-xl hidden md:flex">
                {item.icon}
              </div>

              {/* Card */}
              <div className={`
                p-5 rounded-lg border-2 transition-all duration-300
                ${
                  item.status === "completed"
                    ? "bg-gray-800/50 border-green-600 hover:border-green-400"
                    : item.status === "in-progress"
                    ? "bg-blue-900/20 border-blue-500 hover:border-blue-400"
                    : "bg-gray-800/30 border-purple-600 hover:border-purple-400"
                }
              `}>
                {/* Mobile Icon */}
                <div className="md:hidden text-2xl mb-2">{item.icon}</div>

                {/* Year */}
                <div className={`text-sm font-semibold mb-2 ${
                  item.status === "completed"
                    ? "text-green-400"
                    : item.status === "in-progress"
                    ? "text-blue-400"
                    : "text-purple-400"
                }`}>
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Status Badge */}
                <div className="mt-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === "completed"
                      ? "bg-green-900/50 text-green-300"
                      : item.status === "in-progress"
                      ? "bg-blue-900/50 text-blue-300"
                      : "bg-purple-900/50 text-purple-300"
                  }`}>
                    {item.status === "completed"
                      ? "✓ Completed"
                      : item.status === "in-progress"
                      ? "⏳ In Progress"
                      : "🎯 Upcoming"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
