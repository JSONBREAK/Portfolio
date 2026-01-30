// Overview.js
// รวมข้อมูล section สำหรับ ContentContainer

import { data as projectData } from "../data/project";
import { data as learningData } from "../data/learning";
import { data as todoData } from "../data/todo";

export const sections = [
  {
    id: "Project-section",
    title: "Project",
    data: projectData,
  },
  {
    id: "LearningAndResearch-section",
    title: "Learning & Research",
    data: learningData,
  },
  {
    id: "ToDo-section",
    title: "To-Do List",
    data: todoData,
  },
];
