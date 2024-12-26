import Contact from "../sections/Contact"
import Header from "../sections/Header"
import NavBar from "../sections/Navbar"

const LeftSection = () => {
    return(
        <div>
        <div className=' sticky top-14 grid grid-rows-[35%_45%_20%] h-[85vh]'> 
          <Header/>
          <NavBar/>
          <Contact/>
        </div>
      </div>
    )
}

export default LeftSection