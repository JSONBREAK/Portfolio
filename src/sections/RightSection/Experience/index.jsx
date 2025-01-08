import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from '../../../assets/port.png'
import { useState } from "react";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  return (
    <div className="text-primarySubContent1 space-y-4">
      <div className="text-PrimaryAccent font-medium">Experience</div>
      <div
        className={`grid grid-cols-[25%_75%] p-2 py-7 mx-1 hover:bg-primarySubContent2/[0.2] hover:rounded-xl ${isMouseEnter['exp1'] ? "bg-PrimaryTest" : ""}`}
        onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
        onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
      >
        <div>
          <span className="w-5/6 bg-primarySubContent2 p-0.5 rounded-md">June 2025</span>
          <div>
            <img src={picExp} className="object-scale-down rounded-md" />
          </div>
        </div>
        <div className="pl-2">
          <div className="flex flex-col space-y-4">
            <div className={`text-primaryHeader ${isMouseEnter['exp1'] ? "text-PrimaryTitle" : ""}`}>Portfolio</div>
            <div className="text-xl flex gap-4">
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faMedium} />
            </div>
            <div className="text-sm ">· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast.</div>
            <div className="flex gap-4 text-sm">
              <div className={`text-primarySubContent1 text-sm rounded-md bg-PrimarySubContent2/[0.3] px-2 py-1 ${isMouseEnter['exp1'] ? "text-PrimarySubtitle" : ""}`}>React</div>
              <div className={`text-primarySubContent1 text-sm rounded-md bg-PrimarySubContent2/[0.3] px-2 py-1 ${isMouseEnter['exp1'] ? "text-PrimarySubtitle" : ""}`}>Tailwind</div>
            </div>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default Experience;