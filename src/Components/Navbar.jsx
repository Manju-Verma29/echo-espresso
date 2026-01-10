import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }) => isActive ? "text-amber-900 lg:text-lg font-bold border-b-2 border-amber-900 transition" : "text-amber-800 lg:text-lg hover:underline transition";
return (
<>
<header className='fixed top-0 left-0 w-full z-50 bg-amber-100'>
<div className='mx-auto w-full px-2 md:px-15 lg:px-20'>
<div className='flex h-15 sm:h-20 md:h-20 lg:h-25 items-center justify-between gap-4 lg:gap-9 '>
<div className='flex items-center justify-between gap-1 md:gap-3 lg:gap-5'>
    <img src={logo} alt="logo" className='w-10 lg:w-15' />
    <h5 className='text-amber-900 font-mono text-sm md:text-md lg:text-2xl tracking-wider font-semibold '>
        ECHO ESPRESSO
    </h5>
</div>

<nav aria-label='Primary navigation' >
<ul className='flex gap-2 sm:gap-10 md:gap-15 lg:gap-25 text-xs '> 
    <li>
        <NavLink to="/" className={linkClass}>
        Home
        </NavLink>
    </li>

    <li>
        <NavLink to="/about" className={linkClass}>
            About
        </NavLink>
    </li>

    <li>
        <NavLink to="/menu" className={linkClass}>
            Menu
        </NavLink>
    </li>
    <li>
        <NavLink to="/visit" className={linkClass}>
            Visit Us
        </NavLink>
    </li>

    <li>
        <NavLink to="/socials" className={linkClass}>
            Socials
        </NavLink>
    </li>

    <li>
        <NavLink to="/gallery" className={linkClass}>
            Gallery
        </NavLink>
    </li>
</ul>
</nav>
</div>
</div>
</header>
</>
  )
}
