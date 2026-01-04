export default function VisitSection({title, image, children}) {
  return (
    <>
    <section>
        <h1 className=" md:text-3xl lg:text-5xl pl-18 text-amber-900 py-8">{title}</h1>
        <div className="pb-10 grid place-items-center grid-cols-2 p-5 px-10">
            <img src={image} />
            <div className="place-items-center">
              {children}
            </div>     
        </div>
    </section>
    </>
  )
}
