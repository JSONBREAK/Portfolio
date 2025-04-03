const FormattedDate = ({ isHover, children }) => {
    return (
        <div className="w-[200px] h-[40px] flex items-center justify-start px-2 rounded-md">
            <span className={`text-sm ${isHover ? "text-PrimaryAccent" : "text-gray-300"}`}>
                {children}
            </span>
        </div>
    )
}
export default FormattedDate;
