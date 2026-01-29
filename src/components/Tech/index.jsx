const Tech = ({ isHover, data }) => {
    return (
        <div className="flex gap-2 text-sm flex-wrap">
            {
                data.map((e, i) => (
                    <div
                        key={`${e}-tech-${i}`}
                        className={`tech-tag px-3 py-1 rounded-lg font-semibold shadow-md transition-all duration-300
                        ${isHover ? "tech-tag-hover" : ""}`}
                    >{e}</div>
                ))
            }
        </div>
    )
}

export default Tech