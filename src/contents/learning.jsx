import { faGithub, faMedium, faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picRestAPI from '../assets/restAPI.png';
import picFastAPI from '../assets/fastAPI.png';
import picMongodb from '../assets/mongodb.png';
import picDocker from '../assets/docker.png';
import { faFire, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const data = [
    {
        date: "2023-01-10",
        title: "Docker",
        link: "",
        material: [
            { type: faGlobe, link: "https://www.docker.com/" }
        ],
        description: [
            "Docker is a containerization platform that allows you to package and deploy applications in isolated environments, ensuring they run seamlessly anywhere."
        ],
        skill: [
            ["Containerization"],
            ["Microservices Architecture"],
            ["DevOps"]
        ],
        picture: picDocker,
    },
    {
        date: "2023-02-15",
        title: "REST API",
        link: "",
        material: [
            { type: faGlobe, link: "https://restfulapi.net/" }
        ],
        description: [
            "REST APIs are designed to facilitate communication between client and server using HTTP protocols, providing a stateless and scalable way of interacting with systems."
        ],
        skill: [
            ["API Design"],
            ["HTTP Protocols"],
            ["Web Services"]
        ],
        picture: picRestAPI,
    },
    {
        date: "2023-03-01",
        title: "FastAPI",
        link: "",
        material: [
            { type: faGlobe, link: "https://fastapi.tiangolo.com/" }
        ],
        description: [
            "FastAPI is a modern, high-performance web framework for building APIs with Python, designed to build efficient and asynchronous APIs."
        ],
        skill: [
            ["API Development"],
            ["Asynchronous Programming"],
            ["Python Frameworks"]
        ],
        picture: picFastAPI,
    },
    {
        date: "2023-04-10",
        title: "MongoDB",
        link: "",
        material: [
            { type: faGlobe, link: "https://www.mongodb.com/" }
        ],
        description: [
            "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format, ideal for applications requiring fast read/write operations and scalability."
        ],
        skill: [
            ["NoSQL Databases"],
            ["Data Modeling"],
            ["Big Data"]
        ],
        picture: picMongodb,
    },
];
