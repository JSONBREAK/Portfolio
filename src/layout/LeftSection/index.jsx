import Contact from "../../features/contact";
import Header from "../Header/index.jsx";
import Navbar from "../Navbar/index.jsx";

const LeftSection = ({ navBarItems, currentSection }) => {
    return (
        <div className="px-5">
            <div className="flex flex-col gap-y-4 lg:gap-y-5 lg:sticky lg:top-14 lg:grid lg:grid-rows-[auto_1fr_auto] lg:h-[86vh]">
                <Header />
                <Navbar navBarItems={navBarItems} currentSection={currentSection} />
                <div className="flex items-end">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default LeftSection;
