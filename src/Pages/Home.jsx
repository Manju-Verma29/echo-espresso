import { Link } from "react-router-dom";
import hero from "../assets/hero.mp4";

export default function Home() {
return (
  <>
  <main>
  <section className="relative h-screen overflow-hidden playsInline">
  <video className="absolute inset-0 w-full h-full object-cover" src={hero} autoPlay loop muted />
    
  <div className="flex flex-col items-center gap-6 relative z-10 h-full justify-center bg-black/40">
  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-bold">
    ECHO ESPRESSO
  </h1>

  <h3 className="text-lg md:text-3xl  lg:text-5xl text-white tracking-wide">
    Brewed Slow. Served Warm
  </h3>

  <div className="flex gap-8">
     <Link to="/menu" className="border-2 hover:shadow-2xl hover:border-amber-100 hover:text-amber-100 cursor-pointer border-white text-white font-bold px-9 py-3 rounded-md text-sm md:text-lg lg:text-xl">
       Menu
     </Link>
     
      <Link to="/reservations" className="border-2 hover:shadow-2xl hover:border-amber-100 hover:text-amber-100 cursor-pointer border-white text-white font-bold px-7 py-3 rounded-md text-sm md:text-lg lg:text-xl">
       Reserve a Table
     </Link> 
  </div>

  </div>
  </section>
  </main>
  </>
)
}
