
import Navbar from "../app/components/navbar";
import Banner from "../app/components/banner";
import Carsoul from "../app/components/carsoul";
import Product from "../app/components/product";
import Cart from "../app/components/cart";
import Offer from "../app/components/offer";
import Progressor from "../app/components/progessor";
import Testimonials from "../app/components/testimonial";
import Pens from "../app/components/pens";
import Items from "../app/components/items";

export default function App() {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Navbar/>
      <Carsoul/>
      <Progressor/>
      <Product/>
      <Banner/>
      <Pens/>
      <Items/>
      <Cart/>
      <Offer/>
      <Testimonials/>
    </div>
  );
}
