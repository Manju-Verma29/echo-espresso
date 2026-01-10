import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu/Menu"
import Visitus from "./Components/Visit/Visitus"
import About from "./Components/About/About"
import Socials from "./Components/Socials/Socials"
import Gallery from "./Pages/Gallery"
import Reservations from "./Pages/Reservations"
import MenuTypePage from "./Components/Menu/MenuTypePage"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      
    <div className='bg-amber-100 pt-20'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/:category/:type" element={<MenuTypePage/>} />
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/visit" element={<Visitus/>} />
        <Route path="/socials" element={<Socials/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
