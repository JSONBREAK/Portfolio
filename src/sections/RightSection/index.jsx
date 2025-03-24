import { useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../Footer";
import About from "../RightSection/About";
import { data as experienceData } from "../../components/experience";
import { data as projectData } from "../../components/project";
import { data as articleData } from "../../components/article";

const RightSection = () => {
  const [sectionIds, setSectionIds] = useState([]);

  // ฟังก์ชันที่ใช้สำหรับการจัดการ sectionId
  const onInitial = (sectionId) => {
    setSectionIds((prev) => [...prev, sectionId]);
  };

  return (
    <div className="grid gap-y-14 px-5 lg:px-10">
      <About title="About" onInitial={onInitial} />  {/* ส่ง onInitial ไปให้ About */}
      <ContentContainer title="Experience" data={experienceData} />
      <ContentContainer title="Project" data={projectData} />
      <ContentContainer title="Article" data={articleData} />
      <Footer />
    </div>
  );
};

export default RightSection;
