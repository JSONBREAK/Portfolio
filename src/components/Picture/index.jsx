
const Picture = ({pic,title}) => {
    if (!pic)
        return null
    return (
      
        <div>
            <img src={pic} alt={title} className="w-5/6 rounded-md border-2 border-PrimarySubContent" />
        </div>

    )
}

export default Picture;




