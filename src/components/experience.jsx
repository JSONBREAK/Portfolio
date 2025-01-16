import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";

import picExp from '../assets/port.png';
import picTest from '../assets/testpic.jpg'
export const data = [
    {
        date: "2024-2025",
        title: "Portfolio",
        link: "https://jetsurachok.netlify.app/",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK/Portfolio" },
            { type: faYoutube, link: "https://www.youtube.com/watch?v=DOUP5gwk2jI" },
        ],
        desscription: [
            "· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast."
        ],
        skill: [
            ["React", "TailwindCSS", "NodeJS"]
        ],
        picture: picExp,
    },
    {
        date: "0000-9999",
        title: "Date Tester",
        link: "",
        material: [
            { type: faMedium },
   
        ],
        desscription: [
            "· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast."
        ],
        skill: [
            ["Google", "Facebook", "Youtube"]
        ],
        picture: picTest,
    }
];

