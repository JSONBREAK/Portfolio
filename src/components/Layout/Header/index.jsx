import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../../../constants/header';

const Header = () => {
  return (
    <div className='flex flex-col gap-3 max-w-4xl mx-auto px-5'>
      {/* Name */}
      <div className='text-4xl md:text-5xl font-bold text-green-400 pb-2 text-left'>
        {data.name}
      </div>

      {/* Title */}
      <div className='text-base md:text-lg font-semibold text-primaryHeader pb-2 text-left'>
        {data.title}
      </div>

      {/* Caption */}
      <div className='text-sm md:text-base w-full max-w-2xl pb-4 text-left leading-relaxed text-gray-400'>
        {data.caption}
      </div>

      {/* Resume Button */}
      <div className='text-left mt-2'>
        <a href={data.link} target='_blank' rel='noopener noreferrer'>
          <button className='border-2 border-green-500 text-green-400 hover:text-green-300 hover:border-green-400 font-semibold py-2 px-5 rounded-lg transition-all duration-200 inline-flex items-center gap-2'>
            {data.btnText}
            <FontAwesomeIcon icon={faArrowDown} className='text-sm' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
