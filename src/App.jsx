import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu/Menu"

function App() {
  return (
    <>
    <div className='bg-amber-100'>
      <Navbar/>
      <Home/>
      <Menu/>
    </div>
      
    </>
  )
}

export default App
