import Image from "next/image";
import BannerImg from "./img/banner.jpg";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-slate-300 font-sans px-4 sm:px-6 py-4 sm:py-6 mb-4 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-90">
        <Image
          src={BannerImg}
          alt="pen1 banner"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6">
        <h2 className="text-black text-xl sm:text-3xl font-bold mb-2 mt-2">
          Unlock the Art of Expression – Write Your Story{" "}
          <span className="text-white">with Elegance</span>
        </h2>
        <p className="text-black text-sm sm:text-lg text-center max-w-lg italic font-bold">
          Breathe life into every word with a fountain pen
        </p>
        <button
          type="button"
          className="bg-gray-900 text-white text-xs sm:text-sm font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-200"
        >
          Read more
        </button>
      </div>
    </div>
  );
}
