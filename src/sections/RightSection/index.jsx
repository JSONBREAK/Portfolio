import ContentContainer from "../../components/ContentContainer";
import About from "../About";

import { data as projectData } from "../../data/project";
import { data as CurrentFocusData } from "../../data/learning";
import { data as todoData } from "../../data/todo";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
  return (
    <div className="grid gap-y-4 px-5">
      {/* About section */}
      <section id="About-section">
        <About />
      </section>

      {/* Project section */}
      <ContentContainer
        id="Project-section"
        title="Project"
        data={projectData}
        onInitial={onInitial}
      />

      <ContentContainer
        id="LearningAndResearch-section"
        title="Learning & Research" // ใช้ชื่อเดียวกับใน Navbar (text only)
        data={CurrentFocusData}
        onInitial={onInitial}
      />

      <ContentContainer
        id="ToDo-section"
        title="To-Do List" // ใช้ชื่อที่ตรงกันกับใน Navbar
        data={todoData}
        onInitial={onInitial}
      />

      <Footer />
    </div>
  );
};

export default RightSection;
