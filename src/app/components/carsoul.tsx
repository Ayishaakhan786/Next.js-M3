import Image from "next/image";

import pen1 from "./img/c1.jpg";
import pen2 from "./img/c2.jpg";
import pen3 from "./img/c3.jpg";
import pen4 from "./img/c4.jpg";
import pen5 from "./img/c5.jpg";

export default function Carsoul() {
    return (
        <div>
            <section className="bg-slate-300">
                <div className="py-4 px-1 mx-auto mx-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:cols-span-1 md:cols-span-2 bg-white h-auto md:h-full flex flex-col">
                             <a href=""
                             className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-40 flex-grow">
                                <Image src={pen3} alt="pen3" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"/>
                                <div className="absolute inset-0"></div>
                                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">Timeless Elegance {" "}
                                </h3>
                             </a>
                        </div>
                        <div className="cols-span-2 sm:col-span-1 md:cols-span-2 bg-white h-auto md:h-full flex flex-col">
                             <a href=""
                             className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <Image src={pen2} alt="pen2" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"/>
                                <div className="absolute inset-0 "></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">{" "}Write Boldly{" "}
                                </h3>
                             </a>
                             <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                             <a href=""
                             className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <Image src={pen4} alt="pen4" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"/>
                                <div className="absolute inset-0 "></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">{" "}Endless Inspiration{" "}
                                </h3>
                             </a>
                             <a href=""
                             className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <Image src={pen5} alt="pen5" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"/>
                                <div className="absolute inset-0 "></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">{" "}Graceful Precision{" "}
                                </h3>
                             </a>
                        </div> 
                        </div> 
                        <div className="col-span-2 sm:cols-span-1 md:cols-span-2 bg-white h-auto md:h-full flex flex-col">
                             <a href=""
                             className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-40 flex-grow">
                                <Image src={pen1} alt="pen1" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"/>
                                <div className="absolute inset-0"></div>
                                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">Classic Craftsmanship{" "}
                                </h3>
                             </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}