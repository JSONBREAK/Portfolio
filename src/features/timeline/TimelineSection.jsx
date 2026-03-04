import { memo } from "react";
import { timelineData } from "../../data/timeline";
import { TIMELINE_SUBTITLE } from "../../data/profile";
import { cn } from "../../shared/utils/cn";

const STATUS_STYLES = {
  completed: {
    accent: "border-l-green-500 bg-green-500/5",
    badge: "text-green-400",
    text: "Completed",
  },
  "in-progress": {
    accent: "border-l-blue-500 bg-blue-500/5",
    badge: "text-blue-400",
    text: "In Progress",
  },
  upcoming: {
    accent: "border-l-purple-500 bg-purple-500/5",
    badge: "text-purple-400",
    text: "Upcoming",
  },
};

const TimelineSection = memo(function TimelineSection() {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">
          Milestones
        </h2>
        <p className="text-gray-500 text-sm">
          {TIMELINE_SUBTITLE}
        </p>
      </div>

      <div className="space-y-6">
        {timelineData.map((item) => {
          const status = STATUS_STYLES[item.status || "upcoming"];

          return (
            <div
              key={item.title}
              className={cn(
                "p-6 rounded-lg border border-gray-800 border-l-4 transition-colors duration-200 hover:border-gray-600",
                status.accent
              )}
            >
              <div className="text-sm text-gray-500 mb-2">
                {item.year}
              </div>

              <h3 className="text-xl font-medium text-gray-100 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl">
                {item.description}
              </p>

              <div className={cn("text-xs font-medium tracking-wide", status.badge)}>
                {status.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default TimelineSection;
