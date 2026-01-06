import reservations from "../assets/reservations.png";

export default function Reservations() {
  return (
  <>
  <div className="min-h-screen">
    <form action="" className="p-10">
      <div className="text-center grid gap-2.5 pb-9">
      <label className=" text-4xl text-amber-900 ">Reserve a table</label>
      <h4 className="text-amber-900 text-xl">For larger groups, please contact us directly.</h4>
      </div>

      <div className="grid grid-cols-1 gap-3 px-100">   
      <input type="text" placeholder="Full Name" className="border border-amber-900 p-3 text-xl text-amber-900 focus:outline-none rounded-md"  required/>
      <input type="number" placeholder="Phone Number" className="border border-amber-900 p-3 text-xl text-amber-900 focus:outline-none rounded-md"  required/>
      <input type="date" placeholder="Date" className="border border-amber-900 p-3 text-xl text-amber-900 focus:outline-none rounded-md"  required/>
      <input type="number" placeholder="Number of guests" className="border border-amber-900 p-3 text-xl text-amber-900 focus:outline-none rounded-md"  required/>
      <textarea rows={5} placeholder="Special requests" className="border border-amber-900 p-3 text-xl text-amber-900 focus:outline-none rounded-md"  required/>
      <input type="submit" value="Submit" className="border bg-amber-900 text-amber-100 p-3 text-xl font-bold rounded-md"/>
      </div>
    </form>
  </div>
  </>
  )
}
