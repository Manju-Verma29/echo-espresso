export default function SocialSection({title,children}) {
  return (
    <>
    <section className="m-auto pt-10 pb-9 px-10 place-items-center md:space-y-8 lg:space-y-12 md:max-w-5xl lg:max-w-7xl">
        <h2 className=" text-amber-900 font-bold md:text-3xl lg:text-5xl">{title}</h2>
        <div className="place-items-center space-y-12">
            {children}
        </div>
    </section>  
    </>
  )
}
