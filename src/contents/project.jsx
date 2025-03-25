import { faGithub, faMedium, faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";

import picExp from '../assets/port.png';
import weatherApp from '../assets/weatherapp.png';
import picTodo from '../assets/todo.png';
import { faFire } from "@fortawesome/free-solid-svg-icons";
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
        date: "2025-2025",
        title: "Weather App (Using API from OpenWeatherMap)",
        link: "",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK/Weather-App" },
   
        ],
        desscription: [
            "· A weather application that displays real-time weather data for different locations by fetching information from an API. It showcases efficient API integration and data presentation."
        ],
        skill: [
            ["CSS", "Ract.js","Node.js","HTML"]
        ],
        picture: weatherApp,
    },   
];

