import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import News from '../src/New.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-red-300'>hello</h1>

    <News/>
   

   </>
  )
}

export default App
