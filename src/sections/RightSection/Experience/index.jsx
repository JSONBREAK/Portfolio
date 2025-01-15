import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from '../../../assets/port.png'

import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "../../../components/FormattedDate";
import Picture from "../../../components/Picture";
import TitleLink from "../../../components/TitleLink";


const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  return (
    <div className="text-primarySubContent1">
      <div className="text-PrimaryAccent font-medium ">Experience</div>
      <div
        className={`grid grid-cols-[25%_75%] p-2 py-7 mx-1 hover:bg-primarySubContent2/[0.2] hover:rounded-xl ${isMouseEnter['exp1'] ? "bg-PrimaryTest" : ""}`}
        onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
        onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
      >
        <div>
          <FormattedDate isHover={isMouseEnter['exp1']}>2024-2025</FormattedDate>
          <Picture pic={picExp} title="Portfolio" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="pl-4">
          <div className="flex flex-col space-y-4">
            <TitleLink isHover={isMouseEnter['exp1']} title="Portfolio" link="https://jetsurachok.netlify.app/" />
            <div className="text-xl flex gap-4">
              <a href="https://www.youtube.com/watch?v=DOUP5gwk2jI" target="_blank" className="hover:scale-110 hover:text-PrimaryTitle" ><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://github.com/JSONBREAK/Portfolio" target="_blank" className="hover:scale-110 hover:text-PrimaryTitle" ><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div className="text-sm ">· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast.</div>
            <div>
              <div className="flex gap-4 text-sm">
                <div className={`text-primarySubContent1 text-sm rounded-md bg-PrimarySubContent2/[0.3] px-2 py-1 ${isMouseEnter['exp1'] ? "text-PrimaryTitle" : ""}`}>React</div>
                <div className={`text-primarySubContent1 text-sm rounded-md bg-PrimarySubContent2/[0.3] px-2 py-1 ${isMouseEnter['exp1'] ? "text-PrimaryTitle" : ""}`}>Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-[25%_75%] p-2 py-7 mx-1 hover:bg-primarySubContent2/[0.2] hover:rounded-xl ${isMouseEnter['exp2'] ? "bg-PrimaryTest" : ""}`}
        onMouseEnter={() => setIsMouseEnter({ 'exp2': true })}
        onMouseLeave={() => setIsMouseEnter({ 'exp2': false })}
      >
        <div>
          <FormattedDate isHover={isMouseEnter['exp2']}>2024-2025</FormattedDate>
          <Picture pic={picExp} title="Portfolio" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="pl-4">
          <div className="flex flex-col space-y-4">
            <TitleLink isHover={isMouseEnter['exp2']} title="Portfolio (No Link)" link="" />
            <div className="text-xl flex gap-4">
              <a href="https://www.youtube.com/watch?v=DOUP5gwk2jI" target="_blank" className="hover:scale-110 hover:text-PrimaryTitle" ><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://github.com/JSONBREAK/Portfolio" target="_blank" className="hover:scale-110 hover:text-PrimaryTitle" ><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div className="text-sm ">· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast.</div>
            <div>
              <div className="flex gap-4 text-sm">
                <div className={`text-primarySubContent1 text-sm rounded-md bg-PrimarySubContent2/[0.3] px-2 py-1 ${isMouseEnter['exp2'] ? "text-PrimaryTitle" : ""}`}>React</div>
                <div className={`text-primarySubContent1 text-sm rounded-md bg-PrimarySubContent2/[0.3] px-2 py-1 ${isMouseEnter['exp2'] ? "text-PrimaryTitle" : ""}`}>Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Experience;