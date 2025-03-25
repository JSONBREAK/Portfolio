import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faBold } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <div className='gap-4 text-2xl flex items-end pl-6'>

            <div>
                <a href="https://www.facebook.com/jet.surachokk" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='text-PrimaryBase duration-700 hover:scale-125 hover:text-PrimaryTitle' icon={faFacebook} />
                </a>
            </div>

            <div>
                <a href="https://github.com/JSONBREAK" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className=' text-PrimaryBase duration-700 hover:scale-125 hover:text-PrimaryTitle' icon={faGithub} />
                </a>
            </div>
            <div>
            <a href="https://bold.pro/my/surachok-kaewchan/681r" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className=' text-PrimaryBase duration-700 hover:scale-125 hover:text-PrimaryTitle' icon={faBold} />
                </a>

            </div>
        </div>
    )
}

export default Contact

