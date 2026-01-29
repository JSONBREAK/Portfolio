# เทคนิค Sidebar Navigation (Section Highlight/Scroll)

## 1. วิธีเดิมที่ใช้ (ก่อนปรับปรุง)
- ใช้ sectionId ที่มี space หรือพิมพ์ตรงกับชื่อหัวข้อ เช่น `"Learning & Research-section"`, `"To-Do List-section"`
- ใช้ document.getElementById(sectionId) เพื่อ scroll และ highlight
- ใช้ handleScroll เช็คตำแหน่ง scroll เทียบกับ offsetTop/clientHeight ของแต่ละ section

### ข้อเสียของวิธีเดิม
- id ใน HTML ห้ามมี space ตามมาตรฐาน → document.getElementById หาไม่เจอ
- scroll หรือ highlight section ไม่ตรงกับที่ต้องการ (โดยเฉพาะหัวข้อที่มี space)
- ถ้าเปลี่ยนชื่อหัวข้อหรือ sectionId ไม่ตรงกับ id ใน DOM จะเกิด bug ทันที

---

## 2. วิธีแก้ไข (Best Practice)
- **sectionId/id ห้ามมี space**  
  ใช้ id เช่น `"LearningAndResearch-section"`, `"ToDo-section"`
- **title ที่แสดงผลจะมี space ได้** เช่น `"Learning & Research"`, `"To-Do List"`
- **Navbar และ DOM ต้องใช้ id เดียวกัน**
  - navs = [{ title: "Learning & Research", sectionId: "LearningAndResearch-section" }, ...]
  - `<ContentContainer id="LearningAndResearch-section" ... />`
- **handleScroll ใช้ getBoundingClientRect().top**
  - หา section ที่อยู่ใกล้ขอบบนของ viewport ที่สุด แล้ว setCurrentSection ให้ตรงกับ sectionId
- **handleClick ใช้ scrollIntoView ด้วย sectionId**
  - คลิกที่ sidebar จะ scroll ไปยัง section ที่ id ตรงกับ sectionId

---

## 3. ข้อดีของวิธีใหม่
- รองรับชื่อหัวข้อที่มี space ได้สมบูรณ์
- scroll และ highlight section ได้ถูกต้องทุกหัวข้อ
- เปลี่ยนชื่อหัวข้อใน sidebar ได้อิสระ (แค่ไม่เปลี่ยน id)
- โค้ดอ่านง่าย ดูแลรักษาง่าย

---

## 4. ตัวอย่างโค้ดที่ถูกต้อง (Navbar)
```js
const navs = [
  { title: "Learning & Research", sectionId: "LearningAndResearch-section" },
  { title: "To-Do List", sectionId: "ToDo-section" },
  // ...
];
```
```jsx
<ContentContainer id="LearningAndResearch-section" title="Learning & Research" ... />
```
```js
const handleScroll = useCallback(() => {
  let minDistance = Infinity;
  let closestSection = null;
  navs.forEach((nav) => {
    const section = document.getElementById(nav.sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = nav.sectionId;
      }
    }
  });
  if (closestSection) setCurrentSection(closestSection);
}, [navs]);
```

---

**สรุป:**  
- หลีกเลี่ยง space ใน id/sectionId
- ใช้ id เดียวกันทั้ง Navbar และ DOM
- ใช้ getBoundingClientRect().top เพื่อหา section ที่ใกล้ขอบบนสุด
- title แสดงผลจะมี space ได้อิสระ

เท่านี้ sidebar navigation จะทำงานถูกต้องและยืดหยุ่นสูง!
