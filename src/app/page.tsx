'use client';

import Navbar from "../app/components/navbar";
import Banner from "../app/components/banner";
import Carsoul from "../app/components/carsoul";
import Products from "../app/components/product";
import Progressor from "../app/components/progessor";
import Pens from "../app/components/pens";
import Items from "../app/components/items";
import Footer from "../app/components/footer";
import Menu from "../app/components/menuitems";
import ProductCard from "../app/components/productCard";
import { Product } from "../app/pages/types";
import { useState } from "react";

export default function App() {
  // Initialize cart state
  const [cart, setCart] = useState<Product[]>([]);

  // Handle Add to Cart
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Product added to cart:", product);
  };

  return (
    <div className="bg-slate-300 min-h-screen">
      <Navbar />
      <Carsoul />
      <Progressor />
      <Products />
      <Banner />
      <Pens />
      <Items />
      
      {/* Pass handleAddToCart function as a prop */}
      <ProductCard
        id={1}
        name="Pilot Custom"
        price="$280"
        image="https://static3.webx.pk/files/4688/Images/1eb2424c95a6f9074d13ce07011b7a26-4688-793450-130422124726234.jpeg"
        onAddToCart={handleAddToCart}
      />
      <Menu />
      <Footer />
    </div>
  );
}
