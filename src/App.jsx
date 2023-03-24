import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='LandingPage__Container flex flex-col gap-2 p-12 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 h-screen w-screen'>
        <NavBar/>
        <ItemListContainer/>
    </div>
  )
}

export default App
