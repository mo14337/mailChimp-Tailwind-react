import logo from "../assets/logo.svg"
import { FaSearchDollar } from "react-icons/fa";
import { BsGlobe } from "react-icons/Bs";

function Navbar() {


    return (
        <div className=" sticky top-0">

        <div className=" relative top-0 bg-fixed mx-auto bg-white w-full flex p-5 pl-10 pr-5 justify-between items-center ">
            <nav className="flex items-center justify-center gap-8 ">
                <a className=" font-semibold">Product</a>
                <a className=" font-semibold">Resources</a>
                <a className=" font-semibold">Inspiration</a>
                <a className=" font-semibold">Pricing</a>
            </nav>
            
            <div className=" absolute left-1/2 -translate-x-2/3">
                <img src={logo} />
            </div>

            <div className=" flex gap-4">
                <p className=" mt-2">Sales: +1 (800) 315-5939</p>
                <BsGlobe  className=" text-2xl mt-2"/>
                <FaSearchDollar className=" text-2xl mt-2" />
                <button className=" bg-white font-semibold border border-1 border-black rounded-full text-lg py-2 px-6 mr-3">Login</button>
                <button className=" bg-yellow-400 font-semibold border border-1 border-black rounded-full text-lg py-2 px-6 mr-3">Sign up</button>

            </div>
        </div>

        </div>
    )
}

export default Navbar;