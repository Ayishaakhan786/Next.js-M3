import Image from "next/image";

import P1 from "./img/p1.jpg";
import P2 from "./img/p2.jpg";
import P3 from "./img/p3.jpeg";

const products = [
    {
        id: 1,
        title: "Dollar",
        category: "local",
        price: "$550.00",
        image: P1,
        bgColor: "bg-gray-200",
    },
    {
        id: 2,
        title: "Fancy",
        category: "pelikan",
        price: "$200.00",
        image: P2,
        bgColor: "bg-gray-200",
    },
    {
        id: 3,
        title: "Extra Fancy",
        category: "Piano",
        price: "$450.00",
        image: P3,
        bgColor: "bg-gray-200",
    },
];

export default function Pens() {
    return (
        <div className="p-6 flex flex-wrap gap-6 justify-center items-center">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`flex flex-col w-72 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group`}
                >
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-125 transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: 0.1 }}
                    >
                        <rect
                            x="159.52"
                            y="152"
                            height="152"
                            width="152"
                            rx="8"
                            transform="rotate(-45 159.52 75)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            height="152"
                            width="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: "radial-gradient(black, transparent 50%)",
                                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                opacity: 0.2,
                            }}
                        ></div>
                        <Image
                            className="relative w-32 h-32 object-cover"
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                    <div className="relative text-black px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">{product.category}</span>
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-xl">
                                {product.title}
                            </span>
                            <span className="block bg-white rounded-full text-black text-xs font-bold px-3 py-2">
                                {product.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
