import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>CALCULADORA DE PROPINAS Y CONSUMO</h1>
     </header>
    </>
  )
}

export default App
