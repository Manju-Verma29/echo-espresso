import {socialsData} from './socialsData'
import SocialSection from './SocialSection'

export default function Socials() {
  return (
    <>
    <main className='bg-amber-50'>
    {socialsData.map((section)=>(
        <SocialSection key={section.id} title={section.title} image={section.image} detail={section.detail}>
            {section.content}
        </SocialSection>
    ))}
    </main>
    </>
  )
}
