import AboutSection from "../../features/about/AboutSection";
import TechStackSection from "../../features/tech-stack/TechStackSection";
import QASection from "../../features/qa/QASection";
import GitHubReposSection from "../../features/github/GitHubReposSection";

import { manualTestingData } from "../../data/manualTesting";
import { automationTestingData } from "../../data/automationTesting";
import Footer from "../Footer/index.jsx";

const RightSection = () => {
  return (
    <div className="grid gap-y-8 px-5 lg:border-none border-t border-gray-800 lg:pt-0 pt-8">
      <section id="About-section" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* Tech Stack Section */}
      <section id="TechStack-section" className="scroll-mt-24">
        <TechStackSection />
      </section>

      {/* QA Manual Testing Section */}
      <QASection
        id="ManualTesting-section"
        title="QA Manual Testing"
        description="Test design techniques, scenarios, and quality assurance practices."
        data={manualTestingData}
      />

      {/* QA Automation Testing Section */}
      <QASection
        id="AutomationTesting-section"
        title="QA Automation Testing"
        description="Framework architecture, test organization, and CI/CD integration."
        data={automationTestingData}
      />

      {/* GitHub Repositories Section */}
      <section id="GitHub-section" className="scroll-mt-24">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">Engineering Evidence</h2>
          <p className="text-gray-500 text-xs">Practical implementations showcasing QA expertise and technical growth.</p>
        </div>
        <GitHubReposSection />
      </section>

      <Footer />
    </div>
  );
};

export default RightSection;
