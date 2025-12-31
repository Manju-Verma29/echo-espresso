import openHours from "../assets/openHours.jpg";
import visit from "../assets/visit.jpg";
import arrive from "../assets/arrive.jpg";
import expect from "../assets/expect.jpg";
import contact from "../assets/contact.jpg";
import location from "../assets/location.jpg";

export default function VisitUs() {
  return (
    <>
<main className='px-10 py-15'>
<article>
<h2 className='text-5xl pl-18 text-amber-900 my-8'>Visit Us</h2>
<div className=' pb-10 grid grid-cols-2 m-5 px-10'>
    <div className='p-4'> 
    <img src={visit} alt="" />
    </div>
    
    <div className='m-auto grid place-items-center grid-rows-3 gap-y-6 justify-center items-center'>
    <p className='text-xl p-3 text-amber-900 tracking-wide'>An invitation to slow down.
    Step into a space where time softens, flavors deepen, and every detail is considered.</p>
    </div>
</div>
</article>

<article>
    <h2 className='text-5xl pl-18 text-amber-900 my-8'>Our Location</h2>
    <div  className='grid grid-cols-2 m-5 pb-10 px-10'>

    <div className='m-auto grid place-items-center grid-rows-3 gap-y-6 justify-center items-center'>
    <p className='text-xl p-3 text-amber-900 tracking-wide'>Echo Espresso
    123 Brew Lane
    Your City, Your State 
    Nestled in a quiet corner of the city, our café offers a refined escape from the everyday.</p>
    </div>

    <div className='p-4'>
        <img src={location} className="w-150" />
    </div>
    </div>
</article>

<article>
    <h2 className='text-5xl pl-18 text-amber-900 my-8'>Open Hours</h2>
    <div className="grid grid-cols-2 m-5 pb-10 px-10">
    <div className='p-4'>
        <img src={openHours} className='w-170' />
    </div>

    <div className='m-auto grid  place-items-center grid-rows-3 gap-y-2 justify-center items-center'>
    <h1 className='text-6xl p-3 text-center  text-amber-900 tracking-wide'>Make it your week at Echo Espresso</h1>
    <h1 className='text-amber-600 font-bold text-6xl'>9:00 AM – 11:00 PM</h1>
    <p className='text-xl p-3 text-center text-amber-900 tracking-wide'> 
        Join us from Monday to Sunday, 11:00 AM to 11:00 PM, for a seamless blend of refined flavors and impeccable service, perfect for any moment of your day.
    </p>
    </div>
   </div>
</article>

<article>
    <h2 className='text-5xl pl-18 text-amber-900 my-8'>Arriving</h2>
    <div className="grid  pb-10 grid-cols-2 m-5  px-10">

    <div className='m-auto grid place-items-center grid-rows-3 gap-y-6 justify-center items-center'>
    <p className='text-2xl text-amber-900 tracking-wide'>Easily accessible by foot, car, and public transport.</p>
    <p className="text-2xl text-amber-900 tracking-wide">Nearby parking ensures a seamless arrival.</p>
    </div>

    <div className='p-4'>  
    <img src={arrive} className='w-130' />
    </div>
    </div>
</article>

<article>
    <h2 className='text-5xl pl-18 text-amber-900 my-8'>Contact</h2>
    <div className='grid grid-cols-2 m-5 pb-10 px-10'>
    <div className='p-4'> 
    <img src={contact} alt="" />
    </div>

    <div className='m-auto grid place-items-center grid-rows-3 gap-y-6 justify-center items-center'>
    <p className='text-xl p-3 text-amber-900 tracking-wide'>📞 +91 98765 43210
    ✉️ hello@echoespresso.com

    For reservations, private tastings, or special requests, please reach out in advance.</p>
    </div> 
    </div> 
</article>

<article>
    <h2 className='text-5xl p-9 text-amber-900 my-8'>What to Expect</h2>
    <div className="grid grid-cols-2 m-5 pb-10 px-10">
     <div className='m-auto grid place-items-center grid-rows-3 gap-y-6 justify-center items-center'>
    <div className='text-2xl p-3 my-auto text-amber-900 tracking-wide'>
        <h4>Thoughtfully designed seating</h4>
        <h4>A calm, intimate ambiance</h4>
        <h4>Carefully curated music</h4>
        <h4>Seamless digital and cash payments</h4>
        <h4>Complimentary Wi-Fi</h4>
        <h4>Your Table Awaits</h4>
        <h4> Come for the craft. Stay for the moment.</h4>
    </div>
    </div>

    <div className='p-4'>
    <img src={expect}  />
    </div>

   
    </div>
    
</article>
</main>
    </>
  )
}
