import Contact from "../../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({ navBarItems, currentSection }) => {
    return (
        <div className="px-5">
            <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[auto_1fr_auto] lg:h-[86vh]">
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
