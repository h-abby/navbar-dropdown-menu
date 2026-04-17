import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Navbar"
import Home from './Home'
import Services from './Services'
import Products from './Products'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
