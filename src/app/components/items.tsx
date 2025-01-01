import React from "react";
import Image from "next/image";

import cart1 from "./img/cart1.jpg";
import cart2 from "./img/cart2.png";
import cart3 from "./img/cart3.jpg";
import cart4 from "./img/cart4.jpg";
import cart5 from "./img/cart5.jpg";
import cart6 from "./img/cart6.jpg";
import { FaShoppingCart } from "react-icons/fa";

const productCarGrid = () => {
    const productItems = [
        cart1,
        cart2,
        cart3,
        cart4,
        cart5,
        cart6,  
    ];
    return (
        <div className="relative text-center p-10">
            <div className="absolute inset-0"
            style={{
                backgroundColor : "bg-slate-300",
                backgroundSize : "cover",
                backgroundPosition : "center",
                zIndex : 0,
            }}/>
                <h1 className="font-bold text-4xl mb-2 text-black z-10 relative italic">Elegant Fountain Pens</h1>
                <h1 className="text-2xl text-black z-10 relative font-bold hover:text-gray-800">Order Now...</h1>
                <section
                id = "projects"
                className="w-full mx-auto grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {Array.from({length:6}).map((_, index) => (
                        <div key={index} className="w-70 bg-slate-300 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
                            <a href="#">
                                <Image src={productItems[index]} alt={`product ${index + 1}`}
                                className="h-40 w-40 object-cover rounded-lg"/>
                                <div className="px-4 py-2 w-40">
                                    <span className="text-gray-700 mr-3 uppercase text-xs">Category {index + 1}</span>
                                    <p className="text-black text-lg font-bold trancate block captaliz">Fountain Pens</p>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-red-700 my-3 cursor-auto">$250</p>
                                        <del>
                                            <br/>
                                            <p className="text-gray-700 ml-2 cursor-auto"> {" "} $200</p>
                                        </del>
                                        <div className="ml-auto ">
                                        <FaShoppingCart className="w-5 h-5 text-black"/>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))} 
                </section> 
            </div>
    )
}
export default productCarGrid;