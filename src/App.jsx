import { useState } from 'react'
import './App.css'
import TestBootstrap from './components/BootstrapTest'
import Navbar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Navbar />
        <TestBootstrap  />
      </div>
    </>
  )
}

export default App
