import Latte from "../assets/Latte.jpeg";
import croissants from '../assets/croissants.jpeg';
import operaCake from "../assets/operaCake.jpeg";

export default function Menu() {
return (
<>
<header>
    <h4 className="p-5  m-10 text-3xl text-amber-900 font-bold">Menu</h4>
</header>

<main className='bg-amber-100'>
    <section>
    <h4 className='p-5 pb-5 m-10 text-3xl font-bold text-amber-900 border-b border-amber-900 '>
        Drinks
    </h4>
    
    {/* drink */}
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 ">
    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5 lg:ml-50 flex flex-col items-center justify-center">
        <img src={Latte} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Signature Coffee</figcaption>
    </figure>

    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5 lg:ml-30  flex flex-col items-center justify-center">
        <img src={Latte} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Cold Craft</figcaption>
    </figure>

    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5   flex flex-col items-center justify-center">
        <img src={Latte} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900">Artisan Tea & Cocoa</figcaption>
    </figure>
    </div>
    </section>


    {/* food */}
    <section>
    <h4 className='p-5 pb-5 m-10 text-3xl font-bold border-b text-amber-900 border-amber-900 '>
        Food
    </h4>
                
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 items-center justify-between gap-8">
    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5  lg:ml-50  flex flex-col items-center justify-center">
        <img src={croissants} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Classic French Pastries</figcaption>
    </figure>

    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5  lg:ml-30  flex flex-col items-center justify-center">
        <img src={croissants} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Gourmet Sandwich</figcaption>
    </figure>

    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5  flex flex-col items-center justify-center">
        <img src={croissants} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Light Plates</figcaption>
    </figure>
    </div>
    </section>



    {/* Desserts */}
    <section>
    <h4 className='p-5 pb-5 m-10 text-3xl font-bold text-amber-900 border-b border-amber-900 '>
        Desserts
    </h4>
    
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5  lg:ml-50  flex flex-col items-center justify-center">
        <img src={operaCake} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Nut & Chocolate Creations</figcaption>
    </figure>

    <figure className="md:w-full lg:w-70 m-10 lg:mt-5  lg:ml-30  flex flex-col items-center justify-center">
        <img src={operaCake} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Chocolate Creations</figcaption>
    </figure>

    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5  flex flex-col items-center justify-center">
        <img src={operaCake} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Cream & Custard Elegance</figcaption>
    </figure>

    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5  lg:ml-50  flex flex-col items-center justify-center">
        <img src={operaCake} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Fruit & Seasonal Refinement</figcaption>
    </figure>

    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5  lg:ml-50  flex flex-col items-center justify-center">
        <img src={operaCake} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">Coffee-Inspired Signatures</figcaption>
    </figure>
    </div>
</section>
</main>

</>
)
}
