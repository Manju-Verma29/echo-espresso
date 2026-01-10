import connect from "../../assets/connect.jpg";
export const socialsData=[
    {
        id:1,
        title:"A Conversation, Ongoing",
        content:(
            <>
            <p className='text-amber-900 text-center md:text-lg lg:text-xl tracking-wide'>Connection at our cafe has never been about volume. It’s about presence. Whether you reach us online or in person, we believe conversation should feel natural, considered, and unhurried.</p>
            <div>
                <img src={connect} className="w-[95%]"/>
            </div>
            
            </>
        ),
    },
    {
        id:2,
        title:"How We Stay in Touch",
        content:(
            <>
            <p className='text-amber-900 md:text-lg lg:text-xl tracking-wide text-center'>We use our social channels as a quiet extension of the café—sharing what’s new, what’s changing, and what’s worth pausing for.</p>
            <div className="text-center"> 
            <p className='text-amber-900 md:text-lg lg:text-xl tracking-wide'>Seasonal menus and new additions</p>
            <p className='text-amber-900 md:text-lg lg:text-xl tracking-wide'>Small updates from the kitchen and counter</p>
            <p className='text-amber-900 md:text-lg lg:text-xl tracking-wide'>Moments from everyday café life</p>
            <p className='text-amber-900 md:text-lg lg:text-xl tracking-wide'>Announcements, shared simply</p>
            </div>
            </>
        )
    },
    {
        id:3,
        title:"Find Us Online",
        content:(
            <>
            <div className="grid grid-cols-3 gap-18">
            <div>
            <strong className='text-sm md:text-md lg:text-xl text-amber-800'>Daily moments</strong>
            <p className='text-sm md:text-md lg:text-lg underline hover:text-blue-700 hover:decoration-blue-800'>Instagram: @echoespresso</p>
            </div>

            <div>
            <strong className='text-sm md:text-md lg:text-xl text-amber-800'>Thoughts and conversations</strong> 
            <p className='text-sm md:text-md lg:text-lg underline hover:text-blue-700 hover:decoration-blue-800'>Threads: @echoespresso</p>
            </div>

            <div>
            <strong className='text-sm md:text-md lg:text-xl text-amber-800'>Updates and notices</strong> 
            <p className='text-sm md:text-md lg:text-lg underline hover:text-blue-700 hover:decoration-blue-800'>X: @echoespresso</p>
            </div>
            </div>
            </>
        )
    },
    {
        id:4,
        title:"In Person",
        content:(
            <>
            <p className=' text-amber-900 md:text-lg lg:text-xl text-center lg:p-3 tracking-wide'>Some conversations are better held at the table. Join us for coffee, stay for the pause.</p>
            </>
        )
    },
    {
        id:5,
        content:(
            <>
            <p className="md:text-lg lg:text-xl italic text-amber-900">Connection begins quietly.</p>
            </>
        )
    },
]