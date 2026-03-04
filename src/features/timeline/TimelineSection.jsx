import { memo } from "react";
import { timelineData } from "../../data/timeline";
import { cn } from "../../shared/utils/cn";

const STATUS_STYLES = {
  completed: {
    card: "bg-gray-800/50 border-green-600 hover:border-green-400",
    year: "text-green-400",
    badge: "bg-green-900/50 text-green-300",
    text: "✓ Completed",
  },
  "in-progress": {
    card: "bg-blue-900/20 border-blue-500 hover:border-blue-400",
    year: "text-blue-400",
    badge: "bg-blue-900/50 text-blue-300",
    text: "⏳ In Progress",
  },
  upcoming: {
    card: "bg-gray-800/30 border-purple-600 hover:border-purple-400",
    year: "text-purple-400",
    badge: "bg-purple-900/50 text-purple-300",
    text: "🎯 Upcoming",
  },
};

const TimelineSection = memo(function TimelineSection() {
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
          {timelineData.map((item) => {
            const status = STATUS_STYLES[item.status || "upcoming"];
            return (
            <div key={item.title} className="relative md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-0 w-12 h-12 bg-gray-900 border-2 border-green-500 rounded-full flex items-center justify-center text-xl hidden md:flex">
                {item.icon}
              </div>

              {/* Card */}
              <div className={cn("p-5 rounded-lg border-2 transition-all duration-300", status.card)}>
                {/* Mobile Icon */}
                <div className="md:hidden text-2xl mb-2">{item.icon}</div>

                {/* Year */}
                <div className={cn("text-sm font-semibold mb-2", status.year)}>
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
                  <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-semibold", status.badge)}>
                    {status.text}
                  </span>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default TimelineSection;
