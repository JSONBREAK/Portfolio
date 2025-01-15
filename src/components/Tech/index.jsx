import picExp from '../../assets/port.png'

const Tech = ({isHover,children}) => {
    return (
        <div>
            <span className={`text-sm ${isHover ? "text-PrimaryAccent" : ""} `}>June 2025</span>
            {children}
            <div>
                <img src={picExp} className="object-scale-down rounded-md" />
            </div>
        </div>
    )
}
export default Tech