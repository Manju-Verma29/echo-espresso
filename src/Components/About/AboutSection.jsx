export default function AboutSection({title,image,children}) {
  return (
    <>
   <section className="block lg:hidden pt-20">
    <h2 className="md:text-3xl lg:text-5xl pl-18 text-center text-amber-900 ">{title}</h2>
    <div className="p-3 px-10">
        <div className="p-2">
            {children}
        </div>
        <img src={image} alt="" />
    </div>      
    </section>

    <section className="hidden lg:block pt-28" >
    <div className=" grid place-items-center grid-cols-2">
    <div>
        <h2 className="md:text-3xl m-11 lg:text-5xl pl-18 text-amber-900">{title}</h2>
        <div className="grid grid-cols-2 mr-10 place-items-center">
            {children}
        </div>
    </div>
        <img src={image} className="w-175" />
    </div>      
    </section> 
     </>
  )
}
