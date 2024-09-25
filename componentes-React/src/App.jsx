import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './assets/componentes/Card'
import Cards from './assets/componentes/cards/cards2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card/> 
      <Cards/>
    </>
  )
}

export default App
