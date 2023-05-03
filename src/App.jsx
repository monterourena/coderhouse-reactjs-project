import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Category from './pages/Category/category';


function App() {
 
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
