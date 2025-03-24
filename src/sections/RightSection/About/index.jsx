import { data } from '../../../contents/description';  // ตรวจสอบ path ให้ถูกต้อง

const About = () => {
    return (
        <div className='space-y-2 px-2' id="About-section">
            <div className='text-PrimarySubtitle font-medium space-y-4'>
                {data.title} {/* แสดง title */}
            </div>
            <div>{data.desc}</div> {/* แสดง description */}
        </div>
    );
}

export default About;
