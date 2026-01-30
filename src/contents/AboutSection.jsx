// AboutSection.jsx
// React component สำหรับแสดงข้อมูล about

const aboutData = {
  description: `This website is my personal space to document what I build and what I learn.

I come from a software development background and am currently focusing on
quality assurance, API testing, and system validation to better understand
how real-world systems behave in production.

I enjoy breaking things (intentionally), asking “what if?”, and improving
software quality through structured testing and technical understanding.`,
};

export default function AboutSection() {
  return (
    <section>
      <h2>{aboutData.title}</h2>
      <p className="text-gray-400" style={{ whiteSpace: 'pre-line' }}>{aboutData.description}</p>
    </section>
  );
}
