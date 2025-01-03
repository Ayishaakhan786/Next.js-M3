import Image from "next/image";

import { CiSearch } from "react-icons/ci";
import { FaPenClip } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import Logo from './img/LOGO.jpg';

export default function Navbar() {
    return (
        <div className="bg-white shadow-md">
            <div className="grid grid-cols-1 p-3">
                <div className="py-1 px-1 rounded-xl border border-black">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Logo and Search */}
                        <div className="flex items-center gap-2">
                            {/* Pen Icon */}
                            <FaPenClip className="w-6 h-6 text-black hover:text-gray-500" />
                            {/* Search Input */}
                            <div className="relative hidden md:block">
                                <input
                                    className="rounded-3xl py-2 px-2 text-black outline-none text-sm w-[250px] lg:w-[350px] pr-10 bg-gray-200 hover:bg-gray-300"
                                    placeholder="Search"
                                />
                                <CiSearch className="w-5 h-5 text-black absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>

                        {/* Order Info, Cart, and Logo */}
                        <div className="flex items-center gap-2">
                            {/* Order Text */}
                            <p className="text-black text-sm hidden md:block font-bold text-center">
                                To get your favourite pen!
                                <span className="text-blue-800 hover:text-blue-400 ml-2">Order now</span>
                            </p>
                            {/* Cart Icon */}
                            <IoCartOutline className="w-8 h-8 rounded-full p-1 text-black hover:text-gray-500" />
                            {/* User Avatar */}
                            <Image
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src={Logo}
                                alt="user avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}