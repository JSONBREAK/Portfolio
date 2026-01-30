# Portfolio Website (React + Vite)

**Date:** January 29, 2026

After a long break, I decided to revive and modernize my old portfolio website.  
This project is a way to refresh my React and frontend skills while building something practical in my free time.

---

## About This Website

- Personal portfolio for showcasing projects, learning progress, and technical interests
- Built with **React**, **Vite**, and **Tailwind CSS**
- Fully responsive layout with clean sidebar navigation
- Designed for easy maintenance and content updates
- Config-driven architecture for scalable section management

---

## Recent Improvements (2026)

- Refactored codebase for better maintainability and readability
- Improved About section readability and visual separation
- Enhanced card and section layouts for a cleaner, modern look
- Tuned colors, background, and text contrast for dark mode
- Fixed sidebar navigation bugs (ID sync, scroll behavior, active highlight)
- Added true fullscreen image popup modal using **React Portal**
- Removed unused files and refined UI accent elements

---

## Project Structure (2026)

Portfolio/
├── public/
│ └── assets/ # Images, resume files, etc.
├── src/
│ ├── components/ # Reusable UI components
│ ├── contents/ # Section content & config (AboutSection, headers, Overview)
│ ├── data/ # Data-only files (projects, learning, todo)
│ ├── sections/ # Layout components (Navbar, RightSection, Footer)
│ ├── assets/ # Images imported into src
│ └── App.jsx # Main application entry
├── README.md # Project overview & documentation
└── ...



---

## Data & Content Architecture

- **src/data/**  
  Contains data-only files for each section (projects, learning, todo)

- **src/contents/**  
  Contains section-specific components and the centralized section configuration  
  (acts as the single source of truth for sections)

- **src/sections/**  
  Core layout and structural components such as Navbar, RightSection, and Footer

---

## Section Management

- All sections are defined in a centralized config file  
  (e.g. `workspaceSections.js` / `Overview.js`)
- Both **Navbar** and **RightSection** dynamically render sections from this config
- Adding or removing a section requires changes in only one place
- No hardcoded section IDs in layout components

---

## Sidebar Navigation: Bug, Fix, and Result

### Problem
- Section IDs containing spaces (e.g. `Learning & Research-section`) break  
  `document.getElementById`
- Sidebar scroll and active highlighting fail for such sections

### Solution
- Always use space-free section IDs  
  (e.g. `LearningAndResearch-section`, `ToDo-section`)
- Keep display titles human-readable
- Ensure Navbar and DOM sections use the exact same IDs
- Detect the active section using `getBoundingClientRect().top`
- Use `scrollIntoView()` for sidebar click navigation

### Result
✅ Sidebar scrolling and active highlighting work correctly for all sections,  
including those with display titles that contain spaces.

---

## Notes

This project is continuously evolving as a personal learning space.  
The current architecture allows new sections and features to be added with minimal refactoring.
