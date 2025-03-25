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

      {/* Learning & Research section */}
      <ContentContainer
        title="LearningResearch"
        data={learningData} // Verify if this is correct or change the data source
        onInitial={onInitial}

      />
      {/* TO-DO section */}
      <ContentContainer
        title="ToDoList"
        data={todoData}
        onInitial={onInitial}
      />


      <Footer />
    </div>
  );
};

export default RightSection;
