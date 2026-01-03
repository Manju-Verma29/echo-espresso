import  VisitSection  from "./VisitSection";
import {visitData} from "./visitData";

export default function Visit2us() {
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
