import { useState } from 'react'
import './App.css'

const colors = ['green', 'purple', 'yellow', 'blue', 'red']

const initialRods = [
  [], // Empty rod
  ['green', 'green'], // Rod with two nuts
  ['purple', 'yellow', 'green', 'red', 'blue', 'yellow'], // Example nuts
  ['purple', 'yellow', 'blue', 'red', 'yellow', 'blue'],
  ['green', 'purple', 'yellow', 'red', 'blue', 'yellow'],
  ['green', 'purple', 'yellow', 'blue', 'red', 'green']
]

function App() {
  const [rods, setRods] = useState(initialRods)

  return (
    <div className="container">
      {rods.map((rod, rodIndex) => (
        <div key={rodIndex} className="rod">
          <div className="rod-base"></div>
          {rod.map((color, index) => (
            <div key={index} className="nut" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
