import '../styles/App.css';
import LeftSection from '../layout/LeftSection';
import RightSection from '../layout/RightSection';

function App() {
    return (
        <div className="mt-14 mx-auto max-w-6xl grid gap-y-8 lg:gap-y-5 lg:grid-cols-[40%_60%]">
            <LeftSection />
            <RightSection />
        </div>
    );
}

export default App;
