import {
  faClipboardList,
  faCheckDouble,
  faChartBar,
  faFileAlt,
  faExclamationTriangle,
  faArrowsRotate,
  faLayerGroup,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

export const manualTestingData = [
  {
    category: "Test Design Techniques",
    icon: faClipboardList,
    color: "text-blue-400",
    items: [
      { name: "Equivalence Partitioning", icon: faCheckDouble },
      { name: "Boundary Value Analysis", icon: faCheckDouble },
      { name: "Decision Table Testing", icon: faLayerGroup },
      { name: "State Transition Testing", icon: faArrowsRotate },
      { name: "Risk-Based Testing", icon: faExclamationTriangle },
      { name: "Test Case Prioritization", icon: faLayerGroup },
    ],
  },
  {
    category: "Test Scenarios & Coverage",
    icon: faChartBar,
    color: "text-green-400",
    items: [
      { name: "Positive Scenarios", icon: faCheckDouble },
      { name: "Negative Scenarios", icon: faBug },
      { name: "Validation Testing", icon: faExclamationTriangle },
      { name: "Edge Case & Exploratory Testing", icon: faArrowsRotate },
      { name: "Business Flow Testing", icon: faClipboardList },
    ],
  },
  {
    category: "Quality & Traceability",
    icon: faFileAlt,
    color: "text-yellow-400",
    items: [
      { name: "Defect Management", icon: faBug },
      { name: "Severity & Priority", icon: faExclamationTriangle },
      { name: "RTM (Requirement Traceability)", icon: faFileAlt },
      { name: "Test Reporting", icon: faChartBar },
      { name: "STLC Framework", icon: faArrowsRotate },
      { name: "Root Cause Analysis", icon: faBug },
    ],
  },
];
