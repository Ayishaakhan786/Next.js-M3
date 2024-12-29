import Image from "next/image";

import BannerImg from "./img/banner.jpg";

export default function Banner () {
    return (
        <div className="relative overflow-hidden bg-white font-sans px-6 py-12 mb-7 text-black">
        <div className="absolute insert-0 opacity-90">
           <Image src={BannerImg} alt="pen1 banner" className="w-full h-full object-cover"/>
        </div>
        <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
            <h2 className="text-black sm:text-3xl font-bold mb-4 mt-4">Unlock the Art of Expression – Write Your Story <span className="text-white">with Elegance</span></h2>
            <p className="text-black text-lg text-center mb-6 max-w-xl italic font-bold">Breathe life into every word with a fountain pen</p>
            <button type="button" className="bg-gray-900 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-200">Read more</button>
        </div>
        </div>
        
    );
}