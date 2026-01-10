import { Link } from "react-router-dom"

export default function BreadCrumbs() {

  return (
    <>
    <nav>
        <ul>
            <li className="md:pb-5">
                <Link to="/menu" className="text-xl md:text-2xl lg:text-2xl text-amber-900 hover:underline">
                    Back
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}
