import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue= ()=>{
    count= count+1
    setCount(count)
  }
  const deleteValue= ()=>{
    count= count-1
    setCount(count)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Count Value: {count}</h2>

      <button
      onClick={addValue}
      >Add value{count}</button>
      <br></br>
      <button
      onClick={deleteValue}
      >Delete value{count}</button>
      <p>footer{count}</p>
    </>

  )
}

export default App
