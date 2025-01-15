
import picExp from '../../assets/port.png'

const FormattedDate = ({ isHover, children }) => {
    return (
        <div>
            <span className={`text-sm ${isHover ? "text-PrimaryAccent" : ""} `}>{children}</span>
        </div>
    )
}
export default FormattedDate