import { useState } from 'react'
import Navbar from './component/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <div className='page home'>
          <div className="homeSess homeSess1">
            
          </div>
          <div className="homeSess homeSess2">
        
          </div>
        </div>
      </main>
    </>
  )
}

export default App
