import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {data} from '../../contents/header'

const Header = ()=>{
    return(
            <div className='flex flex-col gap-2'>
            <div className='text-2xl md:text-3xl font-medium text-PrimaryTitle pb-3'>{data.name}</div>
            <div className='space-x-2 text-primaryHeader pb-3'>{data.title}</div>
            <div className='text-PrimaryContent text-sm w-5/6 pb-3'>{data.caption}</div>
            <div className='text-PrimaryContent text-sm w-5/6 '>{data.programing}</div>
            <div className='text-PrimaryContent text-sm w-5/6 '>{data.frontend}</div>
            <div className='text-PrimaryContent text-sm w-5/6 '>{data.backend}</div>
            <div className='text-PrimaryContent text-sm w-5/6 '>{data.tools}</div>
            
            <div className='mt-4'>
              <a href={data.link} target='_blank'>
            <span className='hover:text-gray-200 rounded-md bg-PrimaryTitle hover:bg-PrimaryBtnFade text-gray-300 py-2 px-3'>
              {data.btnText}
              <span className='ml-1 text-sm rotate-90 inline-block' >
                <FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/>
                </span>
              </span>   
              </a>          
            </div>
          </div>  
    )
}

export default Header