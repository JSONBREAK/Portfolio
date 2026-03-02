// QA Automation Testing Skills - Organized into 3 categories
// Categories: Automation Framework, Test Organization, CI/CD & Analytics
import {
  faJs,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faCog,
  faFlask,
  faCertificate,
  faLink,
  faBrain,
  faGear,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export const automationTestingData = [
  {
    category: "Framework & Architecture",
    icon: faCog,
    color: "text-purple-400",
    items: [
      { name: "Playwright", icon: faFlask },
      { name: "Page Object Model", icon: faCog },
      { name: "JavaScript/Node.js", icon: faJs },
      { name: "Deterministic Test Design", icon: faCode },
      { name: "Test Data Fixtures", icon: faLink },
    ],
  },
  {
    category: "Test Organization",
    icon: faCheckCircle,
    color: "text-indigo-400",
    items: [
      { name: "Smoke Tests", icon: faFlask },
      { name: "Regression Tests", icon: faGear },
      { name: "Business Flow-Driven", icon: faBrain },
      { name: "Isolated & Stateless Tests", icon: faCheckCircle },
      { name: "Risk-Based Prioritization", icon: faCode },
    ],
  },
  {
    category: "CI/CD & Quality",
    icon: faGit,
    color: "text-red-400",
    items: [
      { name: "Parallel Execution", icon: faCog },
      { name: "CI/CD Pipeline", icon: faGit },
      { name: "Failure Screenshots", icon: faCertificate },
      { name: "HTML Reporting", icon: faCode },
      { name: "Flaky Test Prevention", icon: faCheckCircle },
    ],
  },
];
