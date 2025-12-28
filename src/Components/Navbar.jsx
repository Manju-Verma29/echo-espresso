import logo from "../assets/logo.png";

export default function Navbar() {
return (
<>
<header className='bg-amber-100 shadow'>
<div className='mx-auto w-full px-6 lg:px-30 '>
<div className='flex xs:h-20 sm:h-20 md:h-20 lg:h-25 items-center justify-between gap-9 '>
<div className='flex items-center justify-between gap-3 lg:gap-5'>
    <img src={logo} alt="logo" className='w-10 lg:w-16 ' />
    <h5 className='text-amber-900 font-mono lg:text-3xl tracking-wider font-semibold '>
        ECHO ESPRESSO
    </h5>
</div>

<nav aria-label='Primary navigation' className='absolute left-1/2 ' >
<ul className='flex gap-8 lg:gap-25 text-sm font-medium'> 
    <li><a href="/" className='text-amber-900 lg:text-lg transition'>Home</a></li>
    <li><a href="/about" className='text-amber-900 lg:text-lg transition' >About</a></li>
    <li><a href="/menu" className='text-amber-900 lg:text-lg transition' >Menu</a></li>
    <li><a href="/visit" className='text-amber-900 lg:text-lg transition' >Visit Us</a></li>
    <li><a href="/socials" className='text-amber-900 lg:text-lg transition' >Socials</a></li>
</ul>
</nav>
</div>
</div>
</header>
</>
  )
}
