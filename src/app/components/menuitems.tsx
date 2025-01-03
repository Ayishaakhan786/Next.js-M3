'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./productCard";
import { Product } from "../pages/types";

const Menu = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [isCheckOut, setIsCheckOut] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/api/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    alert("Unable to fetch products. Please try again later.");
                } else {
                    console.error("An unexpected error occurred:", error);
                    alert("An unexpected error occurred. Please try again later.");
                }
            }
        }        
        fetchProducts();

        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("cart");
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const toggleCart = () => setShowCart((prev) => !prev);

    const gotoCheckOut = () => setIsCheckOut(true);

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    const parsePrice = (price: number | string) => {
        if (typeof price === "number") return price;
        return parseFloat(price.replace("$", ""));
    };

    return (
        <div className="relative min-h-screen py-6">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background" style={{ backgroundImage: "url('/background.jpg')" }}></div>
            <div className="relative z-10">
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h1 className="text-4xl font-bold text-black mb-4">Unleash elegance with every stroke of our premium fountain pens</h1>
                    <p className="text-xl text-black">Explore our section of elegance & boldness.</p>
                </div>

                <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
                    ))}
                </div>

                <div className="max-w-6xl mx-auto mt-8">
                    <button
                        aria-label="View or Hide Cart"
                        onClick={toggleCart}
                        className="bg-gray-700 text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                    >
                        {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
                    </button>
                    {showCart && (
                        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="font-bold mb-4 text-3xl">Your Cart</h2>
                            {cart.length > 0 ? (
                                <>
                                    <ul>
                                        {cart.map((product, index) => (
                                            <li key={index} className="flex items-center mb-4">
                                                <Image src={product.image || "/fallback.jpg"} alt={product.name} width={80} height={80} />
                                                <span className="ml-4">{product.name} - {product.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-between mt-4">
                                        <span>Total: ${cart.reduce((total, product) => total + parsePrice(product.price), 0).toFixed(2)}</span>
                                        <div>
                                            <button
                                                onClick={gotoCheckOut}
                                                className="bg-blue-500 py-2 px-4 rounded-lg"
                                            >
                                                Checkout
                                            </button>
                                            <button
                                                onClick={clearCart}
                                                className="bg-red-500 py-2 px-4 rounded-lg ml-4"
                                            >
                                                Clear Cart
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p>Your cart is empty</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Menu;