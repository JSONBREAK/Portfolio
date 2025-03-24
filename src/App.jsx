import { useState } from 'react';
import LeftSection from './sections/LeftSection';
import RightSection from './sections/RightSection';

function App() {
  const [sectionIds, setSectionIds] = useState([]);

  const addSectionIds = (sectionId) => {
    setSectionIds((prev) => prev.includes(sectionId) ? prev : [...prev, sectionId]);
  };

  return (
    <div className="mt-14 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8">
      {/* ส่วนซ้าย */}
      <LeftSection />
      {/* ส่วนขวา */}
      <RightSection
        onInitial={addSectionIds}
        sectionIds={sectionIds}
      />
    </div>
  );
}

export default App;
