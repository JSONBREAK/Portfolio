// AboutSection.jsx - About me with intro + career vision + timeline

import Timeline from "./Timeline";
import { data } from "../../constants/header";

export default function AboutSection() {
  return (
    <section>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          About Me
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
          {data.caption}
        </p>
      </div>

      {/* Timeline - Milestones */}
      <Timeline />
    </section>
  );
}

