import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

export default function MenuSubCategory({label,image,items}) {
  const [isOpen, setIsOpen] = useState(false);
return (
<>
<section className="grid place-items-center p-5 text-center">

  <div onClick={()=> setIsOpen(!isOpen)} className=" " >
    <img className="w-48 h-48 lg:w-60 lg:h-60 object-cover mb-8 rounded-full" src={image} alt={label} />
    <h5 className="text-3xl text-amber-900">{label}</h5>
  </div>

  {isOpen && (
    <div className="bg-amber-50">
      {items.map((item,index) => (
          <MenuItemCard key={index} {...item}/>
      ))}
  </div>
  )}
</section>
</>
);
}
