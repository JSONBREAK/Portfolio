import Contact from "..//Contact"
import Header from "..//Header"
import NavBar from "../Navbar"

const LeftSection = () => {
  return (
    <div className="px-5 pb-10 lg:pb-2 lg:mb-0">
      <div className='sticky top-14 px-5 grid gap-y-6 lg:grid-rows-[35%_40%_25%] lg:h-[86vh]'>
        <Header />
        <NavBar />
        <Contact />
      </div>
    </div>
  );
}

export default LeftSection;  