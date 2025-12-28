import MenuSubCategory from './MenuSubCategory';

export default function MenuCategory({label, types}) {
return (
<>
<section>
<h4 className="text-amber-900 font-bold md:w-50 lg:w-70 m-10 lg:mt-10 lg:ml-20 flex flex-col items-center justify-center text-3xl">{label}</h4>
<div className="grid grid-cols-3 border-b m-10 border-amber-900">
  {Object.values(types).map((type, index) => (
    <MenuSubCategory 
      key={index} 
      label={type.label} 
      image={type.image}
      items={type.items}
    />
))}
</div>
</section>
</>
);
}
