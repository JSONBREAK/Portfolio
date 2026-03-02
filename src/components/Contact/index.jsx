import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <div className='flex flex-col gap-4 pl-6'>
            {/* Label */}
            <div className='text-sm font-semibold text-green-400 uppercase tracking-wider'>
                Let's Connect
            </div>

            {/* Icons */}
            <div className='flex gap-5 text-xl md:text-2xl'>
                <a 
                    href="https://www.facebook.com/jet.surachokk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-green-400 transition-all duration-300 hover:scale-110 hover:text-green-300'
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a 
                    href="https://github.com/JSONBREAK" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-green-400 transition-all duration-300 hover:scale-110 hover:text-green-300'
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a 
                    href="https://www.linkedin.com/in/surachok-kaewchan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-green-400 transition-all duration-300 hover:scale-110 hover:text-green-300'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </div>
    )
}

export default Contact
