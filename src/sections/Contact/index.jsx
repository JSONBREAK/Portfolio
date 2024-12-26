import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return(
        <div className='gap-4 text-2xl flex items-end'>
              <FontAwesomeIcon className=' text-PrimaryBase duration-700 hover:scale-125 hover:text-PrimaryTitle' icon={faGithub}/>
              <FontAwesomeIcon className=' text-PrimaryBase duration-700 hover:scale-125 hover:text-PrimaryTitle' icon={faLinkedinIn}/>
              <FontAwesomeIcon className=' text-PrimaryBase duration-700 hover:scale-125 hover:text-PrimaryTitle' icon={faFacebook}/>
          </div>
    )
}

export default Contact