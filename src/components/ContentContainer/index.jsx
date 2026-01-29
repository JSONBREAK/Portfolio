import { useState } from "react";
import Description from "../Description";
import FormattedDate from "../FormattedDate";
import Material from "../Material";
import Picture from "../Picture";
import Tech from "../Tech";
import TitleLink from "../TitleLink";

const ContentContainer = ({
    id,
    title: sectionTitle = "",
    data = [],
}) => {
    const SECTION_ID = id || `${sectionTitle}-section`;
    const [isMouseEnter, setIsMouseEnter] = useState({});

    if (!data) return null;

    return (
        <div id={SECTION_ID} className="text-primarySubContent1">
            <div className="text-green-500 font-bold text-base md:text-lg mb-2">{sectionTitle}</div>
            {data.map(({
                date = "",
                title = "",
                link = "",
                material = [],
                description = [],
                skill = [],
                picture,
            }, index) => {
                return (
                    <div
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
                        className={`flex flex-row items-stretch p-3 py-4 mx-1 my-2 rounded-2xl shadow-xl duration-200 card-glassmorph
                        ${isMouseEnter[`${SECTION_ID}-${index}`] ? "card-glow" : "hover:shadow-2xl"}`}
                        onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                    >
                        <div className="flex flex-col items-center justify-start mr-5 w-[140px] min-w-[140px]">
                            <div className="mb-0.5 w-full flex justify-center">
                                <FormattedDate isHover={isMouseEnter[[`${SECTION_ID}-${index}`]]}>{date}</FormattedDate>
                            </div>
                            <Picture
                                pic={picture}
                                title={title}
                                size={120}
                                fullColumn
                            />
                        </div>
                        <div className="flex flex-col flex-1 pl-1 pr-1 pt-1 pb-1 justify-start gap-2">
                            <div className="mb-1">
                                <TitleLink isHover={isMouseEnter[[`${SECTION_ID}-${index}`]]} title={title} link={link} />
                            </div>
                            {material.length > 0 ? (
                                <div className="text-xl flex gap-2 items-center mb-2">
                                    {material.map((e, i) => (
                                        <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} />
                                    ))}
                                </div>
                            ) : null}
                            <div className="mb-2">
                                {description.map((e, i) => (
                                    <Description key={`${e}-desscription-${i}`} description={e} />
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 mt-1">
                                {skill.map((e, i) => (
                                    <Tech
                                        key={`${e}-skill-${i}`}
                                        isHover={isMouseEnter[`${SECTION_ID}-${index}`]}
                                        data={e}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ContentContainer;
