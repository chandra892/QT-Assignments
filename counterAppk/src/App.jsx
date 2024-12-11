import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1 style={{marginTop:"20px"}}>Counter app</h1>
        <h1 className='counter'>{count}</h1>

        <div className='btn'>
          <button className='inc' onClick={() => setCount((count) => count + 1)}>increment</button>
          <button className='reset' onClick={() => setCount((count) => count - count)}>reset</button>
          <button className='dec' onClick={() => setCount((count) => count - 1)}>decrement</button>
        </div>

    </div>
    </>
  )
}

export default App
