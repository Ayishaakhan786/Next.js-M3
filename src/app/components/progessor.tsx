export default function Progressor () {
    return (
        <div className="flex items-start max:w-screen-lg w-full mx-auto mt-10 bg-slate-300">
            <div className="w-full p-4">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-teal-400 p-1.5 flex items-center justify-center rounded-full">
                    <span className="text-base text-black font-bold ">1</span>
                </div>
                <div className="w-full h-full mx-4 rounded-lg bg-slate-400"></div>
                <div className="mt-2 mr-4">
                    <h6 className="text-base text-black font-bold">step:1 Choose your Favorite pen</h6>
                    <p className="text-xs text-gray-700">Unleash your thoughts with the timeless elegance of a fountain pen</p>
                </div>
            </div>

            <div className="w-full p-4">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-teal-400 p-1.5 flex items-center justify-center rounded-full">
                    <span className="text-base text-black font-bold ">2</span>
                </div>
                <div className="w-full h-full mx-4 rounded-lg bg-slate-400"></div>
                <div className="mt-2 mr-4">
                    <h6 className="text-base text-black font-bold">step:2 customize your order</h6>
                    <p className="text-xs text-gray-700">Your pen, your style – create a masterpiece that's uniquely yours</p>
                </div>
            </div>

            <div className="w-full p-4">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-teal-400 p-1.5 flex items-center justify-center rounded-full">
                    <span className="text-base text-black font-bold ">3</span>
                </div>
                <div className="w-full h-full mx-4 rounded-lg bg-slate-400"></div>
                <div className="mt-2 mr-4">
                    <h6 className="text-base text-black font-bold">step:3 place your order</h6>
                    <p className="text-xs text-gray-700">Order now and bring the art of timeless writing to your fingertips</p>
                </div>
            </div>
        </div>
    );
}