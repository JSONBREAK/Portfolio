import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleLink = ({ isHover, title, link }) => {
    if (!link) {
        return <div className={`font-bold text-lg tracking-wide ${isHover ? "text-PrimaryTitle scale-105" : "text-primaryHeader"} transition-all duration-300`}>
                {title}     
        </div>
    }
    return (
        <div className={`font-bold text-lg tracking-wide flex items-center gap-2 ${isHover ? "text-PrimaryTitle scale-105" : "text-primaryHeader"} transition-all duration-300`}>
            <a href={link} target="_blank" className="hover:underline underline-offset-4">
                {title}
            </a>
            <FontAwesomeIcon icon={faArrowRight} className={`text-xs -rotate-45 duration-700 ease-in-out ${isHover ? "text-PrimaryTitle -translate-y-1 translate-x-1" : ""}`} />
        </div>
    )
}

export default TitleLink