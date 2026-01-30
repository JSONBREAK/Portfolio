import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../../data/header';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <div className='flex flex-col gap-2 max-w-4xl mx-auto px-5'>
      {/* Name */}
      <div className='text-2xl md:text-3xl font-medium text-PrimaryTitle pb-2 text-left'>
        {data.name}
      </div>

      {/* Title */}
      <div className='space-x-2 text-primaryHeader pb-4 text-left'>
        {data.title}
      </div>

      {/* Caption */}
      <div className='text-zinc-400 text-sm w-full sm:w-5/6 pb-4 text-left'>
        {data.caption}
      </div>

      {/* Button with arrow */}
      <div className='text-left'>
        <a href={data.link} target='_blank' rel='noopener noreferrer'>
          <span className='hover:text-white rounded-md bg-PrimaryBtnFade hover:bg-PrimarySubtitle text-white py-2 px-4 inline-flex items-center cursor-pointer'>
            {data.btnText}
            <FontAwesomeIcon
              className='ml-1 text-sm rotate-60 inline-block animate-bounce mt-1 text-white'
              icon={faArrowDown}
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
