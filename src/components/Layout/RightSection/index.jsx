import AboutSection from "../../Sections/AboutSection";
import SkillSection from "../../Sections/TechStack";
import GitHubRepositories from "../../Sections/GitHubReposSection";

import { manualTestingData } from "../../../constants/manualTesting";
import { automationTestingData } from "../../../constants/automationTesting";
import Footer from "../Footer";

const RightSection = () => {
  return (
    <div className="grid gap-y-8 px-5">
      <section id="About-section">
        <AboutSection />
      </section>

      {/* QA Manual Testing Section */}
      <section id="ManualTesting-section">
        <h2 className="text-green-500 font-bold text-xl md:text-2xl mb-4">QA Manual Testing</h2>
        <SkillSection data={manualTestingData} />
      </section>

      {/* QA Automation Testing Section */}
      <section id="AutomationTesting-section">
        <h2 className="text-green-500 font-bold text-xl md:text-2xl mb-4">QA Automation Testing</h2>
        <SkillSection data={automationTestingData} />
      </section>

      {/* GitHub Repositories Section */}
      <section id="GitHub-section">
        <h2 className="text-green-500 font-bold text-xl md:text-2xl mb-4">GitHub Repositories</h2>
        <div className="px-5 mb-8">
          <GitHubRepositories />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RightSection;
