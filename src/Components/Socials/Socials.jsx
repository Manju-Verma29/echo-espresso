import {socialsData} from './socialsData'
import SocialSection from './SocialSection'

export default function Socials() {
  return (
    <>
    <main className='pt-20'>
    {socialsData.map((section)=>(
        <SocialSection key={section.id} title={section.title} image={section.image}>
            {section.content}
        </SocialSection>
    ))}
    </main>
    </>
  )
}
