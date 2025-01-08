import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'


function App() {

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid lg:grid-cols-[2fr_3fr] px-5 pb-7 pt-14 font-poppins tracking-wide'>
      <LeftSection/>
      <RightSection/>
    </div>
    </div>
    

  )
}

export default App
