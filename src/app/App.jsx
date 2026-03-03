import { useState } from 'react';
import '../styles/App.css';
import LeftSection from '../layout/LeftSection';
import RightSection from '../layout/RightSection';

function App() {
    return (
        <div className="mt-14 mx-auto max-w-6xl grid gap-y-8 lg:gap-y-5 lg:grid-cols-[40%_60%]">
            {/* LeftSection and RightSection don't need to manage navBarItems or currentSection */}
            <LeftSection />
            <RightSection />
        </div>
    );
}

export default App;
