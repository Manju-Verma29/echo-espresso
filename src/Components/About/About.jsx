import { AboutData } from "./AboutData";
import AboutSection from "./AboutSection";

export default function Aboutus() {
  return (
    <>
        <main>
            {AboutData.map((section) => (
                <AboutSection 
                key={section.id}
                title={section.title}
                image={section.image}
                >
                {section.content}
                </AboutSection>
            ))}
        </main>
    </>
  )
}
