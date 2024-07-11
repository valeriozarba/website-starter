import { useState } from 'react'
import './App.scss'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className='layout-page'>
      
      <div className='section'>
        <h1>VALERIO ZARBA</h1>
        <h2>Senior FullStack Developer</h2>
        <a href='mailto:contact me' className='button'>contact me</a>
      </div>


    </div>
  )
}

export default App
