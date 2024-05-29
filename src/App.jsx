import { useState } from 'react'
import Pass_generator from './Pass_generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pass_generator/>
    </>
  )
}

export default App
