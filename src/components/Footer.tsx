import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#1f1f1f] backdrop-blur-md shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[#cfcfcf]">
        
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-2xl font-bold tracking-wider text-white">CineNova</h1>
          <p className="text-sm text-[#999] max-w-xs text-center md:text-left">
            Discover, explore, and fall in love with movies  all in one place.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/codeneeth"
            aria-label="GitHub"
            className="hover:text-[#e50914] transition-transform transform hover:-translate-y-1 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/praneeth-sai-kancheti"
            aria-label="LinkedIn"
            className="hover:text-[#00adb5] transition-transform transform hover:-translate-y-1 duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/Whilepraneeth"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-transform transform hover:-translate-y-1 duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Right: Credits */}
        <div className="text-xs text-[#888] text-center md:text-right leading-5">
          <p>© {new Date().getFullYear()} CineNova. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <a
              href="#"
              className="text-white hover:underline hover:text-[#e50914] transition-colors duration-200"
            >
              Praneeth
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
