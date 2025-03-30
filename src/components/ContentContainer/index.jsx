import { useState } from "react";
import Description from "../Description";
import FormattedDate from "../FormattedDate";
import Material from "../Material";
import Picture from "../Picture";
import Tech from "../Tech";
import TitleLink from "../TitleLink";

const ContentContainer = ({
    title: sectionTitle = "",
    data = [],
}) => {
    const SECTION_ID = `${sectionTitle}-section`;
    const [isMouseEnter, setIsMouseEnter] = useState({});

    if (!data) return null;

    return (
        <div id={SECTION_ID} className="text-primarySubContent1">
            <div className="text-green-500 font-medium">{sectionTitle}</div>
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
                        className={`grid grid-cols-[25%_75%] p-2 py-7 mx-1 hover:bg-primarySubContent2/[0.2] hover:rounded-xl ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-PrimaryTest" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                    >
                        <div>
                            <FormattedDate isHover={isMouseEnter[[`${SECTION_ID}-${index}`]]}>{date}</FormattedDate>
                            <Picture
                                pic={picture}
                                title={title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <TitleLink isHover={isMouseEnter[[`${SECTION_ID}-${index}`]]} title={title} link={link} />
                            {material.length > 0 ? (
                                <div className="text-xl flex gap-4 items-center">
                                    {material.map((e, i) => (
                                        <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} />
                                    ))}
                                </div>
                            ) : null}
                            {description.map((e, i) => (
                                <Description key={`${e}-desscription-${i}`} description={e} />
                            ))}
                            <div>
                                <div className="flex flex-wrap gap-2">
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
                    </div>
                );
            })}
        </div>
    );
};

export default ContentContainer;
