export default function AboutSection({title,image,children}) {
  return (
    <section>
        <h2 className="md:text-3xl lg:text-5xl pl-18 text-amber-900 py-8">{title}</h2>
        <div className="pb-10 grid place-items-center grid-cols-2 m-5 px-10">
            <img src={image} alt="" />
            <div className="place-items-center">
                {children}
            </div>
        </div>     
    </section>
  )
}
