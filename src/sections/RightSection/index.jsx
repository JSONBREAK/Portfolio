import ContentContainer from "../../components/ContentContainer";
import AboutSection from "../../contents/AboutSection";

import { sections } from "../../contents/Overview";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
  return (
    <div className="grid gap-y-4 px-5">
      <section id="About-section">
        <ContentContainer title="About" />
        <AboutSection />
      </section>


      {/* Render ContentContainer sections from Overview.js */}
      {sections.map(section => (
        <ContentContainer
          key={section.id}
          id={section.id}
          title={section.title}
          data={section.data}
          onInitial={onInitial}
        />
      ))}

      <Footer />
    </div>
  );
};

export default RightSection;
