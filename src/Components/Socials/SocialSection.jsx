export default function SocialSection({title, detail, children}) {
  return (
    <>
    <section className="m-auto text-amber-900 lg:p-10 px-10 place-items-center  md:space-y-2 lg:space-y-4 md:max-w-5xl lg:max-w-7xl">
        <h2 className="font-bold md:text-2xl lg:text-4xl">{title}</h2>
        <div className="text-sm md:text-lg lg:text-xl tracking-wide text-center">
          {detail}
        </div>
        <div className="place-items-center ">
            {children}
        </div>
    </section>  
    </>
  )
}
