import  VisitSection  from "./VisitSection";
import {visitData} from "./visitData";

export default function Visitus() {
  return (
<>
<main className="md:pt-10">
  {visitData.map((section) => (
      <VisitSection 
      key={section.id} 
      label={section.label}
      title={section.title} 
      image={section.image}
      detail={section.detail} 
      >
      {section.content}
      </VisitSection>
  ))}
</main>
</>
  )
}
