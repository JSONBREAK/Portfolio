import { memo } from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { profileData } from '../../data/profile';

const Header = memo(() => {
  return (
    <div className='flex flex-col gap-2.5 lg:gap-3 max-w-4xl mx-auto px-0 lg:px-5'>
      {/* Name */}
      <div className='text-3xl md:text-4xl font-bold text-green-400 pb-2 text-left'>
        {profileData.name}
      </div>

      {/* Title */}
      <div className='text-xs md:text-sm font-semibold text-primaryHeader pb-2 text-left'>
        {profileData.title}
      </div>

      {/* Caption */}
      <div className='text-sm md:text-base w-full max-w-2xl pb-3 lg:pb-4 text-left leading-relaxed text-gray-400'>
        {profileData.description}
      </div>

      {/* Resume Button */}
      <div className='text-left mt-2'>
        <a href={profileData.link} target='_blank' rel='noopener noreferrer' className='block sm:inline-block'>
          <button className='w-full sm:w-auto justify-center border-2 border-green-500 text-green-400 hover:text-green-300 hover:border-green-400 font-semibold py-2 px-5 rounded-lg transition-all duration-200 inline-flex items-center gap-2'>
            {profileData.btnText}
            <FontAwesomeIcon icon={faArrowDown} className='text-sm' />
          </button>
        </a>
      </div>
    </div>
  );
});

Header.displayName = 'Header';
export default Header;
