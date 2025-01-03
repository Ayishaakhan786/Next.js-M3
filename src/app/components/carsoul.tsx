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
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {/* Card 1 */}
            <div className="col-span-1 sm:col-span-1 md:col-span-2 bg-white flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-40"
              >
                <Image
                  src={pen3}
                  alt="pen3"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0"></div>
                <h3 className="z-10 text-xl sm:text-2xl font-medium text-black absolute top-0 left-0 p-4">
                  Timeless Elegance
                </h3>
              </a>
            </div>

            {/* Card 2 */}
            <div className="col-span-1 sm:col-span-1 md:col-span-2 bg-white flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-40"
              >
                <Image
                  src={pen2}
                  alt="pen2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0"></div>
                <h3 className="z-10 text-xl sm:text-2xl font-medium text-white absolute top-0 left-0 p-4">
                  Write Boldly
                </h3>
              </a>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Card 3 */}
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-40"
                >
                  <Image
                    src={pen4}
                    alt="pen4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0"></div>
                  <h3 className="z-10 text-xl sm:text-2xl font-medium text-white absolute top-0 left-0 p-4">
                    Endless Inspiration
                  </h3>
                </a>

                {/* Card 4 */}
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-40"
                >
                  <Image
                    src={pen5}
                    alt="pen5"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0"></div>
                  <h3 className="z-10 text-xl sm:text-2xl font-medium text-white absolute top-0 left-0 p-4">
                    Graceful Precision
                  </h3>
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-span-1 sm:col-span-1 md:col-span-2 bg-white flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg pb-40"
              >
                <Image
                  src={pen1}
                  alt="pen1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0"></div>
                <h3 className="z-10 text-xl sm:text-2xl font-medium text-black absolute top-0 left-0 p-4">
                  Classic Craftsmanship
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}