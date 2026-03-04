import { memo } from "react";
import Timeline from "../timeline/TimelineSection";
import { profileData } from "../../data/profile";

const AboutSection = memo(function AboutSection() {
  return (
    <section>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          About Me
        </h1>
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
