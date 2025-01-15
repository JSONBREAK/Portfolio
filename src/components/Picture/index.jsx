
const Picture = ({pic,title}) => {
    return (
        <div>
            <img src={pic} alt={title} className="w-5/6 rounded-md border-2 border-PrimarySubContent" />
        </div>

    )
}

export default Picture;




