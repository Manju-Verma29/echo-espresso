import { Link } from 'react-router-dom'
import instagram from '../assets/instagram.png'
import threads from '../assets/threads.png'
import twitter from '../assets/twitter.png'


export default function Footer() {
  return (
    <>
    <div className="pt-5 lg:pt-15 bg-amber-950 text-amber-100">
    <header>
        <p className="px-5 lg:px-50 lg:text-lg md:text-md text-xs text-center">Join us for a weekend of impeccable dining. On Saturdays, we invite you from 10:00 AM, with our chefs curating dishes until 11:00 PM. Savor an unhurried Sunday, starting at 12:00 PM and concluding at 9:00 PM, the perfect end to your weekend.</p>
    </header>

    <main className="grid grid-cols-3 p-3 lg:p-12 justify-items-center ">
        <section className="grid lg:gap-2">
            <h4 className=" text-md md:text-lg lg:text-2xl">Explore</h4>
            <Link to='/' className='text-xs md:text-md lg:text-lg'>
                Home
            </Link>
            <Link to='/menu' className='text-xs md:text-md lg:text-lg'>
                Menu
            </Link>
            <Link to='/reservations' className='text-xs md:text-md lg:text-lg'>
                Reservations
            </Link>
            <Link to='/about' className='text-xs md:text-md lg:text-lg'>
                Our Story
            </Link>
        </section>

        <section className='flex items-center '>
        <div className="place-items-center justify-items-center">
        <h4 className="text-xs md:text-2xl lg:text-3xl  tracking-widest font-bold underline underline-offset-2 md:underline-offset-4 lg:underline-offset-6 decoration-2 md:decoration-2 lg:decoration-3">ECHO ESPRESSO</h4>
        <p className="text-xs md:text-lg lg:text-2xl  ">Cafe • Patisserie</p>
        </div>
        </section>

        <section className="">
            <h4 className="text-md md:text-lg lg:text-2xl pb-4 md:pb-6 lg:pb-8 text-center">Socials</h4>
            <div className='flex gap-1 md:gap-5 lg:gap-5 items-center justify-center'>
                <img src={instagram} className="w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6 cursor-pointer" /> 
                <img src={twitter} className="w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6 cursor-pointer" /> 
                <img src={threads} className="w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6 cursor-pointer" /> 
            </div>  
        </section>
    </main>
    <article className='text-center text-xs md:text-md lg:text-lg pb-4 md:pb-6 lg:pb-8'>
            <h4 className="">© Copyright ECHO ESPRESSO 2026. All rights reserved</h4>
        </article>
    </div>
    </>
  )
}
