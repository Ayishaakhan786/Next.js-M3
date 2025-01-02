
import Navbar from "../app/components/navbar";
import Banner from "../app/components/banner";
import Carsoul from "../app/components/carsoul";
import Product from "../app/components/product";
import Progressor from "../app/components/progessor";
import Pens from "../app/components/pens";
import Items from "../app/components/items";
import Footer from "../app/components/footer";
import Home from "./components/productItems";

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
      <Home/>
      <Footer/>
    </div>
  );
}
