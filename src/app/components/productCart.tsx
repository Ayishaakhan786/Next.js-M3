import { Product } from "../pages/type";
import React from "react";
import Image from "next/image";

// Define interface ProductsProps to accept necessary props
interface ProductsProps {
    id: number;
    name: string;
    price: number;
    image: string;
    onAddCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductsProps> = ({
    id,
    name,
    price,
    image,
    onAddCart,
}) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
                src={image}
                alt={name}
                className="w-40 h-40 object-cover rounded-md mb-4 transition-all duration-400 ease-in-out hover:scale-110"
                width={160}
                height={160}
            />
            <h3 className="text-xl font-bold mb-2 text-black">{name}</h3>
            <p className="text-lg mb-2 text-black">${price}</p>
            <button
                onClick={() => onAddCart({ id, name, price, image })}
                className="bg-teal-200 text-black px-4 py-2 rounded-lg text-lg shadow-md hover:bg-teal-300 transition duration-300 ease-in-out"
            >
                Add To Cart
            </button>
        </div>
    );
};

export default ProductCard;
