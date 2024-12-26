import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Resume from '../../assets/OfSurachok_Kaewchan_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ()=>{
    return(
            <div className='flex flex-col gap-2'>
            <div className='text-3xl text-PrimaryTitle font-semibold'>Surachok Keawchan</div>
            <div className='text-PrimaryAccent'>Software Developer • Unemployed</div>
            <div className='text-sm w-5/6'>
              Jetasd asda fgsdfgdsfgsdf gsdfg d fgdfgd fgdfg asd asda fgsdfgdsfgsdf gsdfg d.
              </div>
            <div className='mt-4'>
              <a href={Resume} target='_blank'>
            <span className='hover:text-gray-200 rounded-md bg-PrimaryTitle text-gray-300 py-2 px-3'>
              View Resume
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