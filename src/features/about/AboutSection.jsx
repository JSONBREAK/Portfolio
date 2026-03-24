import { memo } from "react";
import Timeline from "../timeline/TimelineSection";
import { profileData } from "../../data/profile";

const AboutSection = memo(function AboutSection() {
  return (
    <section>
      {/* Desktop heading only to avoid duplicate hero on mobile */}
      <div className="hidden lg:block mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-green-400 mb-2">
          Hi, I'm a QA Engineer
        </h1>
      </div>

      {/* About Summary */}
      <div className="mb-6">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
          {profileData.aboutme}
        </p>
      </div>

      {/* Timeline - Milestones */}
      <Timeline />
    </section>
  );
});

export default AboutSection;
