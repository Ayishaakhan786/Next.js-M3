import Image from "next/image";

import { CiSearch } from "react-icons/ci";
import { FaPenClip } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import Logo from './img/LOGO.jpg';

export default function navbar () {
    return (
        <div>
            <div className="grid xl:grid-cols-1 grid-cols-1">
                <div className="p-5">
                <div className="py-1 px-1 rounded-xl border border-black w-full">
                <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
{/* {/* Logo for pen /} */}
                <FaPenClip className="w-6 h-6 text-black hover:text-gray-500"/>
{/* search Icon*/}
                <div style={{position : 'relative'}}>
                    <input className=" rounded-3xl py-2 px-2 text-black outline-none text-sm w-[350px] pr-10 hidden lg:block md:block bg-gray-200 hover:bg-gray-300"
                    placeholder="Search"/>
                    <CiSearch className="w-5 h-5 text-black absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block"/>
                </div>
                </div>
            <div className="flex justify-center items-center gap-2">
            <p className="text-black text-sm hidden lg:block md:block tex-bold">To get your favourite pen!
                <span className="text-blue-800 hover:text-blue-400 ml-2 text-sm text-bold">Order now</span>
            </p>
{/*cart icon*/}
<IoCartOutline className="w-8 h-8 rounded-full p-1 relative text-black hover:text-gray-500"/>
<Image className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
     src = {Logo}
     alt = "user avatar"/>
     </div>
                </div>
                </div>
                </div>
            </div>

        </div>
    );
}