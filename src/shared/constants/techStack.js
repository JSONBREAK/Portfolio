import { faFlask, faCog, faLaptop, faCode, faServer, faTools } from "@fortawesome/free-solid-svg-icons";

/**
 * Tech Stack categories with icons and colors
 */
export const TECH_CATEGORIES = [
  { 
    key: "programming", 
    label: "Programming", 
    icon: faLaptop, 
    color: "text-green-400" 
  },
  { 
    key: "frontend", 
    label: "Frontend", 
    icon: faCode, 
    color: "text-blue-400" 
  },
  { 
    key: "backend", 
    label: "Backend", 
    icon: faServer, 
    color: "text-purple-400" 
  },
  { 
    key: "testing", 
    label: "Test Automation", 
    icon: faFlask, 
    color: "text-yellow-400" 
  },
  { 
    key: "ci_cd", 
    label: "CI/CD", 
    icon: faCog, 
    color: "text-orange-400" 
  },
  { 
    key: "tools", 
    label: "Tooling", 
    icon: faTools, 
    color: "text-gray-300" 
  },
];
