import  VisitSection  from "./VisitSection";
import {visitData} from "./visitData";

export default function Visitus() {
  return (
<>
<main>
  {visitData.map((section) => (
      <VisitSection 
      key={section.id} 
      title={section.title} 
      image={section.image} 
      >
      {section.content}
      </VisitSection>
  ))}
</main>
</>
  )
}
