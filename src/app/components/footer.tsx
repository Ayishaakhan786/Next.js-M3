import React from "react";

import Image from "next/image";

import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";

export default function Footer () {
    return (
        <div>
            <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
                <nav className="flex justify-center flex-wrap gap-6 text-black font-medium bg-slate-300">
                    <a className="text-black hover:text-gray-800" href="#">Home</a>
                    <a className="text-black hover:text-gray-800" href="#">About</a>
                    <a className="text-black hover:text-gray-800" href="#">Pages</a>
                    <a className="text-black hover:text-gray-800" href="#">Contact</a>
                </nav>
                <div className="flex justify-center space-x-5 transition-transform duration-400 ease-in-out transform hover:scale-105">
                    <a href="https://www.facebook.com/me/" target="blank" rel="nofollow noopener">
                    <Image src={facebook} alt="facebook logo"/>
                    </a>
                    <a href="https://www.instagram.com/bugs____bunnyyyy__/?__pwa=1#" target="blank" rel="nofollow noopener">
                    <Image src={instagram} alt="Instagram logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ayesha-khan-8103a7246/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtYrVPLZbSXCsvNAkWweqxg%3D%3D" target="blank" rel="nofollow noopener">
                    <Image src={linkedin} alt="twitter logo"/>
                    </a>
                    <a href="https://github.com/Ayishaakhan786" target="blank" rel="nofollow noopener">
                    <Image src={github} alt="github logo"/>
                    </a>
                </div>
                <p className="text-center text-black hover:text-gray-800 font-medium mb-8">2025 @AK SoftTech. All rights reserved.</p>
                <br/>
            </footer>
        </div>
    );
}