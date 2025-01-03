import React from "react";
import Image from "next/image";

import cart1 from "./img/cart1.jpg";
import cart2 from "./img/cart2.png";
import cart3 from "./img/cart3.jpg";
import cart4 from "./img/cart4.jpg";
import cart5 from "./img/cart5.jpg";
import cart6 from "./img/cart6.jpg";
import { FaShoppingCart } from "react-icons/fa";

const ProductCarGrid = () => {
  const productItems = [cart1, cart2, cart3, cart4, cart5, cart6];

  return (
    <div className="relative text-center p-5 bg-slate-300">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "bg-slate-300",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Header */}
      <h1 className="font-bold text-3xl mb-2 text-black z-10 relative italic sm:text-4xl">
        Elegant Fountain Pens
      </h1>
      <h2 className="text-xl text-black z-10 relative font-bold hover:text-gray-800 sm:text-2xl">
        Order Now...
      </h2>

      {/* Product Grid */}
      <section
        id="projects"
        className="grid grid-cols-1 gap-y-10 gap-x-5 mt-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 px-4"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              {/* Product Image */}
              <Image
                src={productItems[index]}
                alt={`product ${index + 1}`}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              {/* Product Details */}
              <div className="p-4">
                <span className="text-gray-700 uppercase text-xs block">
                  Category {index + 1}
                </span>
                <p className="text-black text-lg font-bold capitalize mt-1">
                  Fountain Pens
                </p>
                <div className="flex items-center mt-3">
                  <p className="text-lg font-semibold text-red-700">$250</p>
                  <del className="ml-2 text-gray-700">$200</del>
                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCarGrid;