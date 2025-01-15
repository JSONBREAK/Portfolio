import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleLink = ({ isHover, title, link }) => {
    if (!link) {
        return <div className={` ${isHover ? "text-PrimaryTitle" : "text-primaryHeader"}`}>
                {title}     
        </div>
    }
    return (
        <div className={` ${isHover ? "text-PrimaryTitle" : "text-primaryHeader"}`}>
            <a href={link} target="_blank">
                {title}
            </a>
            <FontAwesomeIcon icon={faArrowRight} className={`text-xs -rotate-45 duration-700 ease-in-out ${isHover ? "text-PrimaryTitle -translate-y-1 translate-x-1" : ""}`} />
        </div>
    )
}

export default TitleLink