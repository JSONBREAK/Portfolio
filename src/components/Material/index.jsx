
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Material = ({ isHover, icon, link }) => {
    return (
        <div className="text-xl flex gap-4">
            <a href={link} target="_blank" className="hover:scale-110 hover:text-PrimaryTitle" ><FontAwesomeIcon icon={icon} /></a>
        </div>
    )
}

export default Material