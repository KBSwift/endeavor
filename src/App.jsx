import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestBootstrap from './components/BootstrapTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Testing Bootstrap</h1>
        <TestBootstrap  />
      </div>
    </>
  )
}

export default App
