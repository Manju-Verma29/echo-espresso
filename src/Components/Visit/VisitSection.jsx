export default function VisitSection({label, image, title, detail}) {
  return (
    <>
    <section> 
        <h1 className="md:text-2xl lg:text-4xl pl-10 lg:pl-25 text-amber-900 lg:py-2">{label}</h1>
        <div className="py-2 lg:pb-10  grid gap-4 lg:gap-1 place-items-center grid-cols-2 lg:p-5 px-10">
            <img src={image}  className="w-170"/>
            <div className="text-center  text-amber-900">
              <h2 className="text-sm md:text-3xl lg:text-4xl lg:mb-5 font-bold">{title}</h2>
              <p className="text-xs md:text-xl lg:text-2xl md:p-2 lg:p-3 tracking-wide">{detail}</p>
            </div>     
        </div>
    </section>
    </>
  )
}
