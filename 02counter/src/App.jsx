import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]= useState(0)

  const addValue = () => {
    if(counter >= 20){
      alert('Counter value cannot exceed 20')
    }
    else
      setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter <= 0){
      alert('Counter value cannot be in negative')
    }
    else
      setCounter(counter - 1) 
  }

  return (
    <>
      <h1>My Counter</h1>
      <h2>Counter value: {counter}</h2>
      <div>
        <button onClick={addValue}>Add Value </button>
        <br/>
        <button onClick={removeValue}>Remove Value </button>
      </div>
    </>
  )
}

export default App
