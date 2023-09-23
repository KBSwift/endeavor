import { useState } from 'react'

import './App.css'
import TestBootstrap from './components/BootstrapTest'
import Input from './components/Input'
import CreateContentForm from './components/CreateContentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <p className="read-the-docs">

        <Input label="email"/>
      </p>
      <div>
        <CreateContentForm />
      </div>


      <div className="container">
        <h1>Testing Bootstrap</h1>
        <TestBootstrap  />
      </div>
    </>
  )
}

export default App