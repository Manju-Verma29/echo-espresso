export default function AboutSection({title,image,children}) {
  return (
    <>
   <section className="block lg:hidden">
    <div className="">
        <h2 className="text-xl md:text-3xl lg:text-5xl pl-18 text-amber-900 ">{title}</h2>
    </div>
    
    <div className="p-3 px-10">
        <div className="p-2">
            {children}
        </div>
        <img src={image} alt="" />
    </div>      
    </section>

    <section className="hidden lg:block pt-12" >
    <div className=" grid place-items-center grid-cols-2">
    <div className="place-items-center">
        <h2 className="md:text-2xl mb-8 lg:text-4xl pl-15 text-amber-900">{title}</h2>
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
