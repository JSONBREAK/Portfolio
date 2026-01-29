// To-Do List: รายการโปรเจกต์ที่อยู่ในแผนหรือกำลังพัฒนา
// สามารถเพิ่ม/แก้ไข/ลบโปรเจกต์ได้ที่นี่
import { faGithub, faMedium, faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";

import picExp from '../assets/port.png';
import weatherApp from '../assets/weatherapp.png';
import picTodo from '../assets/todo.png';
import picQA from '../assets/qa.png';
import { faFire } from "@fortawesome/free-solid-svg-icons";
// data: Array ของโปรเจกต์ใน To-Do List
export const data = [
    {
        // โปรเจกต์ตัวอย่าง 1
        date: "0000-9999", // ปีหรือช่วงเวลาของโปรเจกต์
        title: "Personal Finance Manager", // ชื่อโปรเจกต์
        link: "", // ลิงก์โปรเจกต์ (ถ้ามี)
        material: [
            { type: faGithub } // ไอคอนหรือแหล่งข้อมูล เช่น GitHub
        ],
        description: [
            // คำอธิบายโปรเจกต์
            "· An e-commerce website that allows users to browse products and complete purchases. It features functionalities such as form submissions, database integration, and shopping cart management."
        ],
        skill: [
            ["React", "Redux", "Node.js", "Express.js","MongoDB", "Chart.js"] // ทักษะ/เทคโนโลยีที่ใช้
        ],
        picture: picTodo, // รูปภาพโปรเจกต์
    },
    {
        // โปรเจกต์ตัวอย่าง 2
        date: "0000-9999", // ปีหรือช่วงเวลาของโปรเจกต์
        title: "Food Delivery App", // ชื่อโปรเจกต์
        link: "", // ลิงก์โปรเจกต์ (ถ้ามี)
        material: [
            { type: faGithub } // ไอคอนหรือแหล่งข้อมูล เช่น GitHub
        ],
        description: [
            // คำอธิบายโปรเจกต์
            "· An e-commerce website that allows users to browse products and complete purchases. It features functionalities such as form submissions, database integration, and shopping cart management."
        ],
        skill: [
            ["React", "Context API", "JWT","Google Maps API","Bootstrap"] // ทักษะ/เทคโนโลยีที่ใช้
        ],
        picture: picTodo, // รูปภาพโปรเจกต์
    },
];

