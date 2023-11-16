import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar'
import ItemList from './assets/Components/ItemList'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar></Navbar>
      <ItemList ></ItemList>
    </div>
  )
}

export default App
