import React from 'react'

export default function Contact() {
  return (
    <>
    <section className="flex min-h-screen pt-20 justify-center">
    <form action="" className="sm:p-10 p-6 max-w-2xl w-full">
        <div className="text-center grid gap-2.5 pb-9"> 
            <label className="text-lg font-bold md:text-lg lg:text-2xl pb-1 md:pb-2 lg:pb-3 sm:text-4xl text-amber-900">
                Ask your question
            </label>
        </div>
       
        <div className="grid md:gap-3 lg:gap-5 lg:w-175 grid-cols-1 gap-3">
        <div>
            <input type="text" placeholder="Your name" className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none" />
        </div>
        <div>
            <input type="number" placeholder="Phone number"  className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none"/>
        </div>
        <div>
            <input type="email" placeholder="yourexample@gmail.com"  className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none"/>
        </div>
        <div>
            <input type="button" value="Submit" className="w-full bg-amber-900 hover:bg-amber-950 text-amber-100 p-3 text-base sm:text-xl font-bold rounded-md cursor-pointer" />
        </div>
        </div>
    </form>
    </section>

    </>
  )
}
