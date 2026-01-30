import { data } from '../../data/about';

const About = () => {  
    return (
        <div className="space-y-4 mt-2 px-2 scroll-m-14 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl" id="About-section">
            <div className="text-green-500 font-bold text-base md:text-lg pl-0 mb-2">{data.title}</div>
            <div className="text-zinc-300">
                {data.description.split(/\n\n+/).map((para, idx) => (
                    <p key={idx} className="mb-2 whitespace-pre-line">{para}</p>
                ))}
            </div>
        </div>
    );
};

export default About;
