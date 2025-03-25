import { useState } from 'react';
import './App.css';
import LeftSection from './sections/LeftSection';
import RightSection from './sections/RightSection';

function App() {
    return (
        <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
            {/* LeftSection and RightSection don't need to manage navBarItems or currentSection */}
            <LeftSection />
            <RightSection />
        </div>
    );
}

export default App;
