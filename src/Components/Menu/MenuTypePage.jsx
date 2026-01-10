import { useParams } from "react-router-dom";
import { menuData } from "./menuData";
import BreadCrumbs from "../BreadCrumbs";

export default function MenuTypePage() {
  const {category, type} = useParams();
  const selectedType = menuData[category]?.types[type];

  if(!selectedType){
    return(
      <article className="min-h-screen flex items-center justify-between">
        <p className="text-2xl text-amber-900">Page not found</p>
      </article>
    )
  }
  return (
    <>

    <main className="p-5 lg:p-12 min-h-screen">
    <BreadCrumbs />

      <h2 className="sm:text-lg md:text-2xl lg:text-3xl mb-8 text-amber-900">{selectedType.label}</h2>

      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedType.items.map(item => (
          <li key={item.slug} className="text-amber-900 text-center">
            <img src={item.image} alt={item.name} className="rounded-full md:w-40 md:h-40 lg:w-70 lg:h-70 mx-auto" />
            <h2 className="md:text-xl mt-4 font-semibold">{item.name}</h2>
            <p className="lg:block hidden mt-2">{item.description}</p>
            <p className="mt-2 font-bold">₹{item.price}</p>
          </li>
        ))}
      </ul>

    </main>

    </>
  )
}
