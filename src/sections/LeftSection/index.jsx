import Contact from "..//Contact"
import Header from "..//Header"
import NavBar from "../Navbar"



const LeftSection = () => {
    return(
        <div className="sticky top-14 lg:h-[90vh] grid grid-rows-[70%_30%] gap-6 lg:grid-rows-[3fr_40%_20%] lg:gap-14">
        <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[40%_30%_30%] lg:h-[87vh]'> 
          <Header/>
          <NavBar/>
          <Contact/>
        </div>
      </div>
    )
}

export default LeftSection