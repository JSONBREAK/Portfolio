# QA Learning Journey Portfolio (React + Vite)
## BaseUrl: https://jetsurachok.netlify.app/
**Last Updated:** March 2, 2026

A modern, responsive portfolio showcasing my complete QA and automation testing learning journey - from fundamentals to DevOps aspirations. Built with React, Vite, and Tailwind CSS.

---

## 🎯 About This Portfolio

- **Personal Portfolio** documenting 5 years of learning: CPE → IT Break → QA Manual → QA Automation → DevOps
- **Interactive Timeline** visualizing career milestones and learning progression
- **QA Skills Showcase** with manual testing techniques and automation framework experience
- **GitHub Repository** links to 5 learning repositories
- **Responsive Design** with clean sidebar navigation (40% left, 60% right content)
- **OOP Architecture** with organized component structure and centralized data management

---

## 🚀 Recent Updates (2026)

### Code Architecture Restructuring
- ✅ Implemented OOP principles with organized folder structure
- ✅ Separated components by responsibility: **Layout**, **Sections**, **Contact**
- ✅ Centralized data in **constants/** folder
- ✅ Organized styles in **styles/** folder
- ✅ Updated all import paths for better maintainability

### New Features
- ✅ **Timeline Component** - Career milestones visualization
- ✅ **QA Manual Testing Section** - 15 test design techniques and QA concepts
- ✅ **QA Automation Testing Section** - Framework knowledge, CI/CD, test automation
- ✅ **GitHub Repositories Section** - 5 curated learning repositories with stats
- ✅ **Improved Contact Section** - Social media links with hover effects

### UX/UI Improvements
- ✅ Enhanced typography hierarchy (text-4xl/5xl for names, text-2xl for titles)
- ✅ Consistent section spacing (gap-y-8)
- ✅ Minimalist navbar design with smooth transitions
- ✅ Outlined header button style with green border
- ✅ Proper viewport scrolling with Intersection Observer

---

## 📁 Project Structure (OOP Architecture)

```
Portfolio/
├── public/
│   └── Images & assets
├── src/
│   ├── components/          # UI Components (organized by responsibility)
│   │   ├── Layout/          # Layout components
│   │   │   ├── Header/      # Hero section with name & title
│   │   │   ├── Navbar/      # Navigation menu
│   │   │   ├── LeftSection/ # Sidebar container
│   │   │   ├── RightSection/# Main content area
│   │   │   └── Footer/      # Footer
│   │   ├── Sections/        # Content sections
│   │   │   ├── AboutSection.jsx     # Career intro & timeline
│   │   │   ├── Timeline/            # Career milestones
│   │   │   ├── TechStack/           # Skills display
│   │   │   └── GitHubReposSection/  # Repository showcase
│   │   └── Contact/         # Social links
│   ├── constants/           # Centralized data files
│   │   ├── header.js        # Hero data
│   │   ├── timeline.js      # Career milestones
│   │   ├── manualTesting.js # QA manual testing skills
│   │   ├── automationTesting.js # QA automation skills
│   │   └── githubRepos.js   # GitHub repositories
│   ├── styles/              # CSS stylesheets
│   │   ├── App.css
│   │   └── index.css
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎓 Content Sections

### 1. **About Section**
- Introduction to my QA learning journey
- Career vision with systems thinking mindset
- Integrated career timeline

### 2. **QA Manual Testing**
- **Test Design Techniques** (5 items)
  - Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition, Risk-Based Testing
- **Test Scenarios & Coverage** (5 items)
  - Positive/Negative scenarios, Edge cases, Performance testing, User acceptance
- **QA Concepts** (5 items)
  - Quality metrics, Bug reporting, Root cause analysis, Test metrics

### 3. **QA Automation Testing**
- **Automation Framework** (5 items)
  - JavaScript, React, Playwright, Git, Test organization
- **Test Organization** (5 items)
  - Page Object Model, Test helpers, Fixtures, Configuration, Best practices
- **CI/CD & Analytics** (5 items)
  - Pipeline integration, Test reporting, Performance monitoring, Analytics, Compliance

### 4. **GitHub Repositories**
- 5 curated learning repositories:
  1. **javascript-for-test-automation** - JS fundamentals
  2. **qa-learning-journey-repository** - QA concepts & methodologies
  3. **qa-saucedemo-test-automation** - Playwright automation
  4. **qa-saucedemo-test-design** - Test design & RTM
  5. **Portfolio** - This project

### 5. **Contact Section**
- Social media links: Facebook, GitHub, LinkedIn
- Located in bottom-left sidebar with hover effects

---

## 🛠 Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.1 (with HMR on localhost:5173)
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** FontAwesome (free-solid, free-brands)
- **Layout:** Two-column responsive grid (40% sidebar, 60% content)

---

## 📐 Architecture Principles

### Separation of Concerns
- **Components** - Pure UI rendering
- **Constants** - Data and configuration
- **Styles** - CSS organization
- **Hooks** - Reusable logic
- **Utils** - Helper functions

### Data Flow
- Centralized data in `/constants/` folder
- Components import data as needed
- Single source of truth for each data type
- Easy to update content without touching components

### Scalability
- Adding new sections requires:
  1. Create data file in `constants/`
  2. Create section component in `components/Sections/`
  3. Update `RightSection` to include new section
  4. Create content in new file

---

## 🎨 Design System

- **Color Scheme:** Dark mode with green accent (#10b981)
- **Typography:** 
  - Hero name: `text-4xl md:text-5xl`
  - Section titles: `text-xl md:text-2xl`
  - Body text: `text-sm md:text-base`
- **Spacing:** `gap-y-8` between sections
- **Transitions:** Smooth hover effects (300ms duration)

---

## 📝 Notes

This portfolio is a living document of my learning journey. It evolves continuously as I progress through my QA and DevOps learning path. The clean architecture allows easy updates and serves as a reference for React best practices.

**Personal Learning Goals:**
- Master QA Manual Testing Techniques
- Build strong Automation Testing skills (Playwright, JavaScript)
- Understand DevOps concepts and CI/CD workflows
- Practice systems thinking in quality assurance


