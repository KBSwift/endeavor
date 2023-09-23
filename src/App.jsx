import { useState } from 'react'



import './App.css'
import TestBootstrap from './components/BootstrapTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <p className="read-the-docs">
        jello world
      </p>

      <div className="container">
        <h1>Testing Bootstrap</h1>
        <TestBootstrap  />
      </div>
    </>
  )
}

export default App