import React from "react";
import Image from "next/image";

import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col items-center space-y-6 m-4 mb-0 bg-slate-300 py-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-black font-medium">
          <a className="hover:text-gray-800 text-sm md:text-base" href="#">
            Home
          </a>
          <a className="hover:text-gray-800 text-sm md:text-base" href="#">
            About
          </a>
          <a className="hover:text-gray-800 text-sm md:text-base" href="#">
            Pages
          </a>
          <a className="hover:text-gray-800 text-sm md:text-base" href="#">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/me/"
            target="_blank"
            rel="nofollow noopener"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={facebook}
              alt="Facebook logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://www.instagram.com/bugs____bunnyyyy__/?__pwa=1#"
            target="_blank"
            rel="nofollow noopener"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={instagram}
              alt="Instagram logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ayesha-khan-8103a7246/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtYrVPLZbSXCsvNAkWweqxg%3D%3D"
            target="_blank"
            rel="nofollow noopener"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={linkedin}
              alt="LinkedIn logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://github.com/Ayishaakhan786"
            target="_blank"
            rel="nofollow noopener"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={github}
              alt="GitHub logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-black hover:text-gray-800 text-sm md:text-base font-medium">
          2025 @AK SoftTech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}