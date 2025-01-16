const Tech = ({ isHover, data }) => {
    return (
        <div className="flex gap-2 text-sm">
            {
                data.map((e, i) => (

                    <div key={`${e}-tech-${i}`} className={`text-primarySubContent1 text-sm rounded-md bg-PrimarySubContent2/[0.3] px-2 py-1 ${isHover ? "text-PrimaryTitle" : ""}`}>{e}</div>
                ))
            }
        </div>
    )
}

export default Tech