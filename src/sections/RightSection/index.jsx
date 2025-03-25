import ContentContainer from "../../components/ContentContainer";
import About from "../About";

import { data as projectData } from "../../contents/project";
import { data as learningData } from "../../contents/learning";
import { data as todoData } from "../../contents/todo";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
  return (
    <div className="grid gap-y-20 px-5">
      {/* About section */}
      <About />

      {/* Project section */}
      <ContentContainer
        title="Project"
        data={projectData}
        onInitial={onInitial}
      />

      <ContentContainer
        title="Learning&Research" // ใช้ชื่อเดียวกับใน Navbar
        data={learningData}
        onInitial={onInitial}
      />

      <ContentContainer
        title="ToDo" // ใช้ชื่อที่ตรงกันกับใน Navbar
        data={todoData}
        onInitial={onInitial}
      />

      <Footer />
    </div>
  );
};

export default RightSection;
