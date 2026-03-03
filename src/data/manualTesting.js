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
      { name: "Positive Testing", icon: faCheckDouble },
      { name: "Negative Testing", icon: faBug },
      { name: "Input Validation Testing", icon: faExclamationTriangle },
      { name: "Edge Case Testing", icon: faArrowsRotate },
      { name: "Exploratory Testing", icon: faBug },
      { name: "Business Flow Testing", icon: faClipboardList },
    ],
  },
  {
    category: "Quality & Traceability",
    icon: faFileAlt,
    color: "text-yellow-400",
    items: [
      { name: "Defect Lifecycle Management", icon: faBug },
      { name: "Severity & Priority Classification", icon: faExclamationTriangle },
      { name: "Requirement Traceability Matrix (RTM)", icon: faFileAlt },
      { name: "Test Reporting & Metrics", icon: faChartBar },
      { name: "Software Testing Life Cycle (STLC)", icon: faLayerGroup },
      { name: "Root Cause Analysis", icon: faBug },
    ],
  },
];
