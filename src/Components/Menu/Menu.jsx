import {menuData} from './menuData'
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
<main className="p-5 lg:p-20 space-y-10">
    {Object.entries(menuData).map(([categoryKey, category]) => (
        <section key={categoryKey}>
            <h1 className='md:text-2xl lg:text-3xl text-amber-900 font-bold mb-6'>{category.label}</h1>

            <ul className='grid grid-cols-3 place-items-center text-center gap-8'>
                {Object.entries(category.types).map(([typeKey, type]) => (
                    <li key={typeKey}>
                        <Link to={`/menu/${categoryKey}/${typeKey}`}>
                        <img src={type.image} alt={type.label} className='rounded-full md:w-50 lg:w-70 ' />
                        <p className="md:text-xl lg:text-2xl p-1 text-amber-900">{type.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    ))}
</main>
</>
  )
}
