import { data } from '../../contents/about';

const About = () => {  
    return (
        <div className="space-y-4 mt-2 px-2 scroll-m-14" id="About-section">
            <div className="text-green-500 font-medium">{data.title}</div>
            <div>{data.description}</div>
        </div>
    );
};

export default About;
