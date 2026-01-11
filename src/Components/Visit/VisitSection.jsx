export default function VisitSection({title, image, children}) {
  return (
    <>
    <section> 
        <h1 className=" md:text-2xl lg:text-4xl pl-10 lg:pl-25 text-amber-900 lg:py-8">{title}</h1>
        <div className="pb-10  grid place-items-center grid-cols-2 lg:p-5 px-10">
            <img src={image}  className="w-170"/>
            <div className="place-items-center">
              {children}
            </div>     
        </div>
    </section>
    </>
  )
}
