import {data} from '../../../contents/description'
const About = () => {
    return(
        <div className='space-y-4'>
            <div className='text-PrimaryAccent font-medium space-y-4'>{data.title}</div>
            <div>{data.desc}</div>
        </div>
    )     
}

export default About