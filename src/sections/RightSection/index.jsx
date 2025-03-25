import ContentContainer from "../../components/ContentContainer";
import About from "../About"; 
import { data as experienceData } from "../../contents/experience";
import { data as projectData } from "../../contents/project";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
  return (
    <div className="grid gap-y-20 px-5">
      {/* About section */}
      <About/>

      {/* Experience section */}
      <ContentContainer
        title="Experience"
        data={experienceData}
        onInitial={onInitial}  
      />

      {/* Project section */}
      <ContentContainer
        title="Project"
        data={projectData}
        onInitial={onInitial}  
      />

      {/* Article section */}
      <ContentContainer
        title="Article"
        data={projectData} // Verify if this is correct or change the data source
        onInitial={onInitial}
      />

      <Footer />
    </div>
  );
};

export default RightSection;
