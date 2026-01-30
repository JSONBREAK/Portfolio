import { faGithub, faMedium, faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picQA from '../assets/qa.png';
import picPostman from '../assets/postman.png';
import picPlaywright from '../assets/playwright.png';
import { faFire, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const data = [
    {
        date: "2026-01-29",
        title: "QA Tester / Automation (In Progress)",
        link: "https://github.com/JSONBREAK/qa-learning-practice-repository",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK/qa-learning-practice-repository" }
        ],
        description: [
            "· A task management application that allows users to create, add, edit, and delete tasks. It demonstrates effective state management using React.js for seamless interaction and dynamic updates."
        ],
        skill: [
            ["QA", "Automation", "API Testing", "System Validation"]
        ],
        picture: picQA,
    },
    {
        date: "2026-01-29",
        title: "Postman",
        link: "",
        material: [
            { type: faGlobe, link: "https://www.postman.com/" }
        ],
        description: [
            "Postman is a collaboration platform for API development, making it easy to test, document, and monitor APIs."
        ],
        skill: [
            ["API Testing"],
            ["Automation"],
            ["Collaboration"]
        ],
        picture: picPostman,
    },
    {
        date: "2026-01-29",
        title: "Playwright",
        link: "",
        material: [
            { type: faGlobe, link: "https://playwright.dev/" }
        ],
        description: [
            "Playwright is an end-to-end testing framework for web apps, supporting multiple browsers and powerful automation capabilities."
        ],
        skill: [
            ["End-to-End Testing"],
            ["Automation"],
            ["Cross-Browser"]
        ],
        picture: picPlaywright,
    },
    // ...existing code...
];