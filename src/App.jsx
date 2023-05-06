import { useState } from 'react'
import './App.css'
import Display from './Components/Display'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display />
      <Body />
    </>
  )
}

export default App
