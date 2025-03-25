import { faGithub, faMedium, faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picRestAPI from '../assets/restAPI.png';
import picFastAPI from '../assets/fastAPI.png';
import picMongodb from '../assets/mongodb.png';
import picDocker from '../assets/docker.png';
import { faFire } from "@fortawesome/free-solid-svg-icons";
export const data = [
    {
        date: "",
        title: "Docker",
        link: "",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK/Portfolio" },

        ],
        desscription: [
            "· การใช้ Container ช่วยจัดการแอปพลิเคชันให้รันได้ทุกที่ "
        ],
        skill: [
            ["Container Platform"]
        ],
        picture: picDocker,
    },
    {
        date: "",
        title: "REST API",
        link: "",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK" },

        ],
        desscription: [
            "· การออกแบบ API ที่ใช้ HTTP Protocol ให้บริการข้อมูลแบบ Client-Server "
        ],
        skill: [
            ["API"]
        ],
        picture: picRestAPI,
    },
    {
        date: "",
        title: "FastAPI",
        link: "",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK" },

        ],
        desscription: [
            "· Framework สำหรับสร้าง API ด้วย Python ที่เร็วและรองรับ Async "
        ],
        skill: [
            ["API Framework"]
        ],
        picture: picFastAPI,
    },
    
    
    {
        date: "",
        title: "MongoDB",
        link: "",
        material: [
            { type: faGithub, link: "https://github.com/JSONBREAK" },

        ],
        desscription: [
            "· NoSQL Database ที่เก็บข้อมูลแบบ JSON เหมาะกับ API และ Big Data "
        ],
        skill: [
            ["NoSQL Databas"]
        ],
        picture: picMongodb,
    },

    
];

