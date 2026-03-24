import AboutSection from "../../features/about/AboutSection";
import TechStackSection from "../../features/tech-stack/TechStackSection";
import QASection from "../../features/qa/QASection";
import GitHubReposSection from "../../features/github/GitHubReposSection";

import { manualTestingData } from "../../data/manualTesting";
import { automationTestingData } from "../../data/automationTesting";
import Footer from "../Footer/index.jsx";

const RightSection = () => {
  return (
    <div className="space-y-12 lg:space-y-16 px-5 lg:border-none border-t border-gray-800/60 lg:pt-0 pt-6 pb-10 lg:pb-0">
      {/* About Section */}
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
        titleColor="text-gray-200"
      />

      {/* QA Automation Testing Section */}
      <QASection
        id="AutomationTesting-section"
        title="QA Automation Testing"
        description="Framework architecture, test organization, and CI/CD integration."
        data={automationTestingData}
        titleColor="text-green-400"
      />

      {/* GitHub Repositories Section */}
      <section id="GitHub-section" className="scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-1">Engineering Evidence</h2>
          <p className="text-gray-500 text-sm">Practical implementations showcasing QA expertise and technical growth.</p>
        </div>
        <GitHubReposSection />
      </section>

      <Footer />
    </div>
  );
};

export default RightSection;
