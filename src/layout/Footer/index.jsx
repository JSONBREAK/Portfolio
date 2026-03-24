import { memo } from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = memo(() => {
    return(
        <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 lg:justify-between lg:items-center text-xs text-gray-500">
                <span>© 2026 Jet Surachok</span>
                <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
                    <span className="leading-relaxed">Powered by React.js & Tailwind CSS</span>
                    <a href="https://github.com/JSONBREAK/Portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
            </div>
        </div>
    )
});

Footer.displayName = 'Footer';
export default Footer;
