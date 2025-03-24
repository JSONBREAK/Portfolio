import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from '../../contents/header'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <div className='flex flex-col gap-2 max-w-4xl mx-auto px-5'>
      <div className='text-2xl md:text-3xl font-medium text-PrimaryTitle pb-2 text-left'>
        {data.name}
      </div>
      <div className='space-x-2 text-primaryHeader pb-4 text-left'>
        {data.title}
      </div>
      <div className='text-PrimaryContent text-sm w-full sm:w-5/6 pb-4 text-left'>
        {data.caption}
      </div>

      <div className='text-left'>
  <a href={data.link} target='_blank' rel='noopener noreferrer'>
    <span className='hover:text-white rounded-md bg-PrimaryBtnFade hover:bg-PrimarySubtitle text-white py-2 px-4 inline-flex items-center'>
      {data.btnText}
      <span className='ml-1 text-sm rotate-60 inline-block'>
        <FontAwesomeIcon className='animate-bounce mt-1 text-white' icon={faArrowDown} />
      </span>
    </span>
  </a>
</div>



    </div>
  )
}

export default Header;
