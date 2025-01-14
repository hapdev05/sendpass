import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Vite + React + Tailwind
        </h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="text-gray-600">
            Edit <code className="text-sm bg-gray-100 p-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-gray-600">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
