export default function MenuItemCard({image,name, price}) {
  return (
    <>
    
    <figure className="md:w-50 lg:w-70 m-10 lg:mt-5 lg:ml-50 flex flex-col items-center justify-center">
        <img src={image} className="mb-5 rounded-full" alt="" />
        <figcaption className="md:text-xl lg:text-3xl text-amber-900 ">{name}</figcaption>
        <p>₹{price}</p>
    </figure>
    </>
  )
}
