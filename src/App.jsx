import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer"
import HomeScreen from './screens/Home/HomeScreen';
import CategoryScreen from './screens/Category/CategoryScreen';


function App() {
 
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/category/:id' element={<CategoryScreen/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CategoryScreen/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
