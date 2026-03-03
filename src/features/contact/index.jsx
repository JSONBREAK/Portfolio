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
            <div className='flex gap-6 text-xl text-gray-400'>
                <a
                    href='https://www.facebook.com/jetsur.24'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-green-400 transition-colors'
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href='https://github.com/JSONBREAK'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-green-400 transition-colors'
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href='https://www.linkedin.com/in/surachok-kaewchan/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-green-400 transition-colors'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </div>
    )
}

export default Contact
