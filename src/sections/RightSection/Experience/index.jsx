import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from '../../../assets/port.png'
import { useState } from "react";
import FormattedDate from "../../../components/FormattedDate";
import Picture from "../../../components/Picture";
import TitleLink from "../../../components/TitleLink";
import Description from "../../../components/Description";
import Tech from "../../../components/Tech";
import {data} from "../../../components/experience"
import Material from "../../../components/Material";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  return (
    <div className="text-primarySubContent1">
      <div className="text-PrimaryAccent font-medium ">Experience</div>
      {
        data.map(({date, title, link, material, desscription, skill, picture}, index) => (
          <div
            className={`grid grid-cols-[25%_75%] p-2 py-7 mx-1 hover:bg-primarySubContent2/[0.2] hover:rounded-xl ${isMouseEnter['exp1'] ? "bg-PrimaryTest" : ""}`}
            onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
            onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
          >
            <div>
              <FormattedDate isHover={isMouseEnter['exp1']}>{date}</FormattedDate>
              <Picture pic={picExp} title={title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col space-y-4">
              <TitleLink isHover={isMouseEnter['exp1']} title={title} link={link} />
              <div className="text-xl flex gap-4">
                <Material icon={faYoutube} link="https://www.youtube.com/watch?v=DOUP5gwk2jI"/>
                <Material icon={faGithub} link="https://github.com/JSONBREAK/Portfolio"/>
              </div>
              <Description description="· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast." />
              <div>
                <Tech isHover={isMouseEnter['exp1']} data={["React", "Tailwind"]} />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Experience;