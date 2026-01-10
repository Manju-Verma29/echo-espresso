export default function Reservations() {
  const today = new Date().toISOString().split("T")[0];

  return (
  <>
  <div className="min-h-screen flex justify-center">
    <form action="" className="sm:p-10 p-6 max-w-2xl w-full">
      <div className="text-center grid gap-2.5 pb-9">
      <label className="text-3xl sm:text-4xl text-amber-900 ">Reserve a table</label>
      <h4 className="text-amber-900 text-base sm:text-xl">For larger groups, please contact us directly.</h4>
      </div>

      <div className="grid grid-cols-1 gap-3">   
      <input type="text" placeholder="Full Name" className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none"  required/>
      <input type="number" placeholder="Phone Number" className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none"  required/>
      <input type="date" placeholder="Date" min={today} className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none"  required/>
      <input type="number" placeholder="Number of guests" className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none"  required/>
      <textarea rows={5} placeholder="Special requests" className="w-full border border-amber-900 p-3 text-base sm:text-xl text-amber-900 rounded-md focus:outline-none"  required/>
      <input type="submit" value="Submit" className="w-full bg-amber-900 hover:bg-amber-950 text-amber-100 p-3 text-base sm:text-xl font-bold rounded-md cursor-pointer"/>
      </div>
    </form>
  </div>
  </>
  )
}
