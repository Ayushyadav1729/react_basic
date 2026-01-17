import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/cards.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-500 text-white p-4 rounded-lg mb-5" >TAILWIND TEST</h1>
     <div className='flex'><Card name="lalala" />
     <Card name="ayush" />
     <Card/></div>
    </>
  )
}

export default App
