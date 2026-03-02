// AboutSection.jsx - About me with intro + career vision + timeline

import Timeline from "./Timeline";

export default function AboutSection() {
  return (
    <section>
      {/* Hero Section */}
      <div className="mb-12 px-5">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          About Me
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
          I'm a QA engineer with a systematic mindset, passionate about quality assurance, 
          automation, and building robust systems. Currently on an intensive learning journey 
          combining hands-on expertise with systems thinking to create lasting impact.
        </p>
      </div>

      {/* Timeline - Milestones */}
      <Timeline />
    </section>
  );
}

