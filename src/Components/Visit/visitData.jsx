import visit from "../../assets/visit.jpg";
import location from "../../assets/location.jpg";
import openHours from "../../assets/openHours.jpg";
import arrive from "../../assets/arrive.jpg";
import contact from "../../assets/contact.jpg";
import expect from "../../assets/expect.jpg";

export const visitData = [
{
id:1,
title: "Visit Us",
image: visit,
content: (
    <>
    <div>
    <h3 className="text-amber-900 text-center md:text-xl lg:text-5xl lg:mb-8 font-bold">
        Unhurried. Familiar. Refined.
    </h3>
    <p className="md:text-xl lg:text-3xl p-3 text-center text-amber-900 tracking-wide">
        Make space in your day to slow down and settle in, where every visit is designed to feel unhurried, familiar, and quietly refined.
    </p>
    </div>
    </>
),
},

{
id:2,
title: "Our Location",
image: location,
content: (
    <address className="place-items-center md:text-xl lg:text-3xl p-3 text-amber-900 tracking-wide">
    <p>Echo Espresso</p>
    <p>21 Stillwater Passage,</p>
    <p>The Commons,</p>
    <p>Aurelian 560022</p>
    </address>
),
},

{
id:3,
title: "Open Hours",
image: openHours,
content: (
    <>
    <div>
    <h3 className="text-amber-900 text-center md:text-xl lg:text-5xl lg:mb-8 font-bold">
        9:00 AM – 11:00 PM
    </h3>
    <p className="md:text-xl lg:text-3xl p-3 text-center text-amber-900 tracking-wide">
        Make it your week at Echo Espresso.
    </p>
    </div>
    </>
),
},

{
id:4,
title: "Arriving",
image: arrive,
content: (
    <>
    <div>
    <h3 className="text-amber-900 text-center md:text-3xl lg:text-5xl lg:mb-8 font-bold">
        A Calm Welcome
    </h3>
    <p className="md:text-xl lg:text-3xl p-3  text-center text-amber-900 tracking-wide">
        Easily accessible by foot, car, and public transport.
    </p>
    <p className="md:text-xl lg:text-3xl lg:p-3 md:p-0 text-center text-amber-900 tracking-wide">
        Nearby parking ensures a seamless arrival.
    </p>
    </div>
    </>
),
},

{
id:5,
title: "Contact",
image: contact,
content: (
    <>
    <form action="" className="grid">
        <label className="text-amber-900 text-2xl pb-3 text-center">Ask your question</label>
        <div className="grid md:gap-2 lg:gap-5 lg:w-175">
        <div>
            <input type="text" placeholder="Your name" className="border w-full text-amber-900 rounded-md bg-amber-100 p-3 focus:ring-current text-xl" />
        </div>
        <div>
            <input type="number" placeholder="Phone number"  className="border w-full text-amber-900 rounded-md bg-amber-100 p-3 text-xl"/>
        </div>
        <div>
            <input type="email" placeholder="yourexample@gmail.com"  className="border w-full text-amber-900 rounded-md bg-amber-100 p-3 text-xl"/>
        </div>
        <div>
            <input type="button" value="Submit" className="border w-full text-amber-100 font-bold bg-amber-900 rounded-md p-3 text-xl" />
        </div>
        </div>
    </form>
    </>
),
},

{
id:6,
title: "What to Expect",
image: expect,
content: (
    <>
    <div>
    <h3 className="text-amber-900 text-center md:text-3xl lg:text-5xl lg:mb-8 font-bold">
        Luxury, Delivered with Restraint
    </h3>
    <p className=" md:text-xl lg:text-3xl p-3 text-center text-amber-900 tracking-wide">
        An atmosphere of calm sophistication, exceptional craftsmanship, attentive service, and thoughtfully curated flavors — where every visit feels intentional.
    </p>
    </div>
    </>
),
},
]