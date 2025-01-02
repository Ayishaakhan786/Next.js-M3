'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../pages/type";
import ProductCard from "./product"; // Correct import for ProductCard

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setshowCart] = useState(false);
    const [isCheckOut, setisCheckOut] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();

        // Local Storage
        const saveCart = localStorage.getItem("cart");
        if (saveCart) {
            setCart(JSON.parse(saveCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const cartToggle = () => {
        setshowCart((prev) => !prev);
    };

    const GotoCheckOut = () => {
        setisCheckOut(true);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <div className="relative min-h-screen py-6 bg-slate-300">
            <div className="relative z-10">
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h1 className="text-black font-bold text-4xl mb-4">
                        Elevate your writing with our luxury fountain pens
                    </h1>
                    <p className="text-black text-xl">Explore our items</p>
                </div>

                {/* Display the products */}
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product} // Spread the product props
                            // onAddCart={addToCart}  // Pass addToCart function as onAddCart
                        />
                    ))}
                </div>

                {/* Cart and Checkout Section */}
                {showCart && (
                    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4">
                        <h3 className="font-semibold">Your Cart</h3>
                        <ul>
                            {cart.map((product) => (
                                <li key={product.id}>{product.name}</li>
                            ))}
                        </ul>
                        <button onClick={GotoCheckOut} className="mt-2 py-2 px-4 bg-green-500 text-white rounded">
                            Checkout
                        </button>
                        <button
                            onClick={clearCart}
                            className="ml-2 py-2 px-4 bg-red-500 text-white rounded"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Home;
