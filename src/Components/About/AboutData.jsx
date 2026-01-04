import story from "../../assets/story.jpeg";
import experience from "../../assets/experience.jpg";

export const AboutData =[
{
    id:1,
    title:"Every cup is a reflection of craft",
    image: story,
    content:(
        <>
        <h1 className="text-amber-900 text-center md:text-lg lg:text-3xl lg:mb-8 font-bold">Our Story</h1>
        <p className="md:text-lg lg:text-2xl p-1 text-center text-amber-900 tracking-wide">Our story is rooted in intention and restraint. From carefully chosen origins to practiced hands behind every brew, we focus on balance, precision, and quiet consistency. This café was created as a space to slow down — where quality is felt, simplicity is refined, and every cup is served with purpose.</p>
        </>
    )
},

{
    id:2,
    title:"A space shaped by intention",
    image:experience,
    content:(
        <>
        <h1 className="text-amber-900 text-center md:text-lg lg:text-3xl lg:mb-8 font-bold">The Experience</h1>
        <p className="md:text-lg lg:text-2xl p-3 text-center   text-amber-900 tracking-wide">Every element of our café is designed with purpose — from the atmosphere to the service you receive. Calm, attentive, and unhurried, the experience invites you to pause and be present. This is a place where details matter quietly, and comfort comes naturally.</p>
        </>
    )
},
]