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
    
    <div className='m-auto  place-items-center '>
    <h2 className="text-amber-900 text-5xl mb-8 font-bold">Unhurried. Familiar. Refined.</h2>
    <p className="max-w-3xl text-xl p-3 text-center text-amber-900 tracking-wide">
  Make space in your day to slow down and settle in, where every visit is designed to feel unhurried, familiar, and quietly refined.
</p>

    </div>
</div>
</article>

<article>
    <h2 className='text-5xl pl-18 text-amber-900 my-8'>Our Location</h2>
    <div  className='grid grid-cols-2 m-5 pb-10 px-10'>

    <div className='m-auto  '>
    <p className='text-xl p-3 text-amber-900 tracking-wide'>
        <p>Echo Espresso</p>
        <p>21 Stillwater Passage,</p>
        <p>The Commons,</p>
        <p>Aurelian 560022</p>
    
    </p>
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

    <div className='m-auto place-items-center'>
    <h2 className="text-amber-900 font-bold m-8 text-5xl">
            A Calm Welcome
    </h2>
    <p className='text-3xl text-amber-900 tracking-wide'>Easily accessible by foot, car, and public transport.</p>
    <p className="text-3xl text-amber-900 tracking-wide">Nearby parking ensures a seamless arrival.</p>
    </div>

    <div className='p-4'>  
    <img src={arrive} className='w-130' />
    </div>
    </div>
</article>

<article>
    <h2 className='text-5xl pl-18 text-amber-900 my-8'>Contact</h2>
    <div className='grid grid-cols-2  m-auto pb-10 px-10  '>
    <div className='p-4'> 
    <img src={contact} alt="" />
    </div>

    <div className=' '>
    <form action="" className="grid py-20">
        <label className="text-amber-900 text-2xl text-center">Ask your question</label>
        <div className="grid gap-5 m-5"> 
        <div>
            <input type="text" placeholder="Your name" className="border w-full text-amber-900 rounded-xl bg-amber-100 p-3 focus:ring-current text-xl" />
        </div>
        <div>
            <input type="number" placeholder="Phone number"  className="border w-full text-amber-900 rounded-lg bg-amber-100 p-3 text-xl"/>
        </div>
        <div>
            <input type="email" placeholder="yourexample@gmail.com"  className="border w-full text-amber-900 rounded-md bg-amber-100 p-3 text-xl"/>
        </div>
        <div>
            <input type="button" value="Submit" className="border w-full text-amber-100 font-bold bg-amber-900 rounded-xl p-3 text-xl" />
        </div>
        </div>
    </form>
    </div> 
    </div> 
</article>

<article>
    <h2 className='text-5xl pl-18 text-amber-900 my-8'>What to Expect</h2>        
     <div className='grid grid-cols-2 px-10 m-auto place-items-center '>
    <div className='text-2xl p-3 my-auto text-center text-amber-900 tracking-wide'>
        <h2 className="text-amber-900 m-8 font-bold text-5xl">
            Crafted With Care
        </h2>
        <p>From thoughtfully prepared drinks to attentive service and a calm
    atmosphere, every detail is designed to feel considered and consistent.</p>
    </div>

    <div className='px-4'>
    <img src={expect} />
    </div>
    </div>
</article>
</main>
    </>
  )
}
