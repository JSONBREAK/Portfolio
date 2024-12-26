import './App.css'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

function App() {

  return (
    
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <LeftSection/>
      <RightSection/>
    </div>

  )
}

export default App
