
# Portfolio Website (React + Vite)

## Recent Improvements (2026)
- Enhanced About section readability and visual separation
- Added/removed accent elements for cleaner design
- Tuned color, background, and text contrast for dark mode
- Fixed sidebar navigation bugs (ID, scroll, highlight)
- Refactored code for maintainability and readability
+ Added true fullscreen image popup modal using React Portal

- Improved card and section layouts for clarity and modern look
- Adjusted spacing and alignment for all sections
- Enhanced About section readability and visual separation
- Added/removed accent elements for cleaner design
- Tuned color, background, and text contrast for dark mode
- Fixed sidebar navigation bugs (ID, scroll, highlight)
- Refactored code for maintainability and readability


Date: January 29, 2026

After a long break, I decided to revive and modernize my old portfolio website.
This project is a way for me to refresh my React and frontend skills while building something practical in my free time.

About This Website

A personal portfolio for showcasing projects, learning progress, and technical interests

Built with React, Vite, and Tailwind CSS

Fully responsive layout with clean sidebar navigation

Designed for easy maintenance and content updates

Code structure focuses on readability and clarity (with some Thai comments for reference)

Project Structure

```
Portfolio/
├── public/
│   └── assets/           # Images, resume files, etc.
├── src/
│   ├── components/       # Reusable UI components (ContentContainer, Picture, etc.)
│   ├── contents/         # Data for each section (about.jsx, project.jsx, learning.jsx, todo.jsx)
│   ├── sections/         # Layout sections (Navbar, RightSection, Footer, etc.)
│   ├── assets/           # Images imported directly into src
│   └── App.jsx           # Main application entry
├── README.md             # Project overview & notes
└── ...
```

Sidebar Navigation: Bug & Fix & Develop
Bug

Using section IDs that contain spaces (e.g. Learning & Research-section, To-Do List-section) causes document.getElementById to fail.

This breaks the scroll-to-section behavior and active sidebar highlight.

Sidebar highlighting does not work correctly for section titles with spaces.


Fix & Develop

Continuous UI/UX improvements and code refactoring are applied for a better user and developer experience.

Always use IDs without spaces (e.g. LearningAndResearch-section, ToDo-section)

Display titles can still contain spaces (e.g. Learning & Research, To-Do List)

Ensure the Navbar and DOM sections use the exact same ID

Use getBoundingClientRect().top to detect the section closest to the top of the viewport

Use scrollIntoView() with the correct sectionId when handling sidebar clicks

Result

✅ Sidebar scrolling and active highlighting work correctly for all sections, including those with display titles that contain spaces.