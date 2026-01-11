import { Link } from 'react-router-dom'
import instagram from '../assets/instagram.png'
import threads from '../assets/threads.png'
import twitter from '../assets/twitter.png'


export default function Footer() {
  return (
    <>
    <div className="pt-15 bg-amber-950 text-amber-100">
    <header className="px-50 text-lg text-center">
        <p className="">Join us for a weekend of impeccable dining. On Saturdays, we invite you from 10:00 AM, with our chefs curating dishes until 11:00 PM. Savor an unhurried Sunday, starting at 12:00 PM and concluding at 9:00 PM, the perfect end to your weekend.</p>
    </header>

    <main className="grid grid-cols-3 p-12 justify-items-center ">
        <section className="grid gap-2">
            <h4 className="text-2xl">Explore</h4>
            <Link to='/'>
                Home
            </Link>
            <Link to='/menu'>
                Menu
            </Link>
            <Link to='/reservations'>
                Reservations
            </Link>
            <Link to='/about'>
                Our Story
            </Link>
        </section>

        <section className="grid justify-items-center ">
        <h4 className="text-4xl leading-none tracking-widest font-bold underline underline-offset-6 decoration-3">ECHO ESPRESSO</h4>
        <p className="text-2xl leading-none -mt-1">Cafe • Patisserie</p>
        </section>

        <section className="">
            <h4 className="text-2xl pb-8 text-center">Socials</h4>
            <div className='flex gap-5 items-center justify-center'>
                <img src={instagram} className="w-6 h-6 cursor-pointer" /> 
                <img src={twitter} className="w-6 h-6 cursor-pointer" /> 
                <img src={threads} className="w-6 h-6 cursor-pointer" /> 
            </div>  
        </section>
    </main>
    <article className='text-center text-lg pb-8'>
            <h4 className="">© Copyright ECHO ESPRESSO 2026. All rights reserved</h4>
        </article>
    </div>
        



    </>
  )
}
