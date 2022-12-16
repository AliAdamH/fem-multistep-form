import { useState } from 'react'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary-pastel flex md:justify-center md:items-center h-screen'>
      <Form />
    </div>
  )
}

export default App
