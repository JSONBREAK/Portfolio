import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = () => {
    return (
        <div className='flex flex-col gap-3 font-semibold mt-20'>
            <div><FontAwesomeIcon className='mr-2 text-PrimaryTitle' icon={faArrowRight}></FontAwesomeIcon> About</div>
            <div><FontAwesomeIcon className='mr-2 text-PrimaryTitle' icon={faArrowRight}></FontAwesomeIcon>Experience</div>
            <div><FontAwesomeIcon className='mr-2 text-PrimaryTitle' icon={faArrowRight}></FontAwesomeIcon>Project</div>
            <div><FontAwesomeIcon className='mr-2 text-PrimaryTitle' icon={faArrowRight}></FontAwesomeIcon>Article</div>
          </div>
    )
}

export default NavBar