
import Navbar from "../app/components/navbar";
import Banner from "../app/components/banner";
import Carsoul from "../app/components/carsoul";
import Cart from "../app/components/cart";
import Offer from "../app/components/offer";
import Product from "../app/components/product";
import Progressor from "../app/components/progessor";
import Testimonials from "../app/components/testimonial";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <Banner/>
      <Carsoul/>
      <Cart/>
      <Offer/>
      <Product/>
      <Progressor/>
      <Testimonials/>
    </div>
  );
}
