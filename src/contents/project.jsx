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
        description: [
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
        description: [
            "· A weather application that displays real-time weather data for different locations by fetching information from an API. It showcases efficient API integration and data presentation."
        ],
        skill: [
            ["CSS", "Ract.js","Node.js","HTML"]
        ],
        picture: weatherApp,
    },   
    {
        date: "2025-2025",
        title: "Recipe Finder",
        link: "",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK/Recipe-Finder" },
   
        ],
        description: [
            "· A recipe search application that lets users search for recipes by ingredients. It uses the Spoonacular API to fetch recipe data and display it to users with options to view ingredient lists, cooking instructions, and images. This project demonstrates API calls and data rendering in React."
        ],
        skill: [
            ["React", "Axios","Node.js","HTML","Tailwind CSS"]
        ],
        picture: "",
    }, 
];

