export default function AboutSection({title,image,children}) {
  return (
    <>
    <section className="block lg:hidden">
        <h2 className="md:text-3xl lg:text-5xl pl-18 text-amber-900 py-8">{title}</h2>
        <div className="pb-10 p-5 px-10">
            <div className="m-5">
                {children}
            </div>
            <img src={image} alt="" />
        </div>      
    </section>

    <section className="hidden md:block" >
        <h2 className="md:text-3xl lg:text-5xl pl-18 text-amber-900 py-8">{title}</h2>
        <div className="pb-10 grid place-items-center grid-cols-2 p-5 px-10">
            <div className="grid grid-cols-2 mr-20 place-items-center">
                {children}
            </div>
            <img src={image} alt="" />
        </div>      
    </section>
     </>
  )
}
