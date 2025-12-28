import MenuCategory from "./MenuCategory";
import { menuData } from "./menuData";

export default function Menu() {
return (
<>
<main className="bg-amber-100">
    {Object.values(menuData).map((category, index) => (
        <MenuCategory
         key={index}
         label={category.label}
         types={category.types}
        />
    ))}  
</main>

</>
)
}
