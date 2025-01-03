'use client';

import { Product } from "../pages/types";
import React from "react";
import Image from "next/image";

interface ProductCardProps extends Product {
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    image,
    onAddToCart,
}) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out max-w-sm sm:max-w-full w-full">
            {/* Image */}
            <Image
                src={image}
                alt={name}
                className="w-full h-40 sm:h-48 object-cover rounded mb-4 transform transition-all duration-300 ease-in-out hover:scale-110"
                layout="responsive"   // Makes the image responsive
                width={48}            // Define the width of the image
                height={48}
                sizes="(max-width: 640px) 100vw, 50vw"
            />
            {/* Product Name */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black text-center">
                {name}
            </h3>
            {/* Product Price */}
            <p className="text-md sm:text-lg text-black mb-4 text-center">
                {price}
            </p>
            {/* Add to Cart Button */}
            <button
                onClick={() => onAddToCart({ id, name, price, image })}
                className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm sm:text-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out w-full"
            >
                Add To Cart
            </button>
        </div>
    );
};
export default ProductCard;