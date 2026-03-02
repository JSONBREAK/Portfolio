import AboutSection from "../../Sections/AboutSection";
import SkillSection from "../../Sections/TechStack";
import GitHubRepositories from "../../Sections/GitHubReposSection";

import { manualTestingData } from "../../../constants/manualTesting";
import { automationTestingData } from "../../../constants/automationTesting";
import Footer from "../Footer";

const RightSection = () => {
  return (
    <div className="grid gap-y-8 px-5 lg:border-none border-t border-gray-800 lg:pt-0 pt-8">
      <section id="About-section">
        <AboutSection />
      </section>

      {/* QA Manual Testing Section */}
      <section id="ManualTesting-section">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">QA Manual Testing</h2>
          <p className="text-gray-500 text-xs">Test design techniques, scenarios, and quality assurance practices.</p>
        </div>
        <SkillSection data={manualTestingData} />
      </section>

      {/* QA Automation Testing Section */}
      <section id="AutomationTesting-section">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">QA Automation Testing</h2>
          <p className="text-gray-500 text-xs">Framework architecture, test organization, and CI/CD integration.</p>
        </div>
        <SkillSection data={automationTestingData} />
      </section>

      {/* GitHub Repositories Section */}
      <section id="GitHub-section">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">GitHub Repositories</h2>
          <p className="text-gray-500 text-xs">Learning repositories showcasing QA expertise and technical growth.</p>
        </div>
        <GitHubRepositories />
      </section>

      <Footer />
    </div>
  );
};

export default RightSection;
