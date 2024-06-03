import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 md:px-20 py-2.5 md:py-5 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold">SaaS Website</div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto flex-grow`}
        >
          <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0 mx-auto">
            <a href="#features" className="text-black font-semibold">
              Features
            </a>
            <a href="#enterprise" className="text-black font-semibold">
              Enterprise
            </a>
            <a href="#resources" className="text-black font-semibold">
              Resources
            </a>
            <a href="#pricing" className="text-black font-semibold">
              Pricing
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
            <button className="bg-white text-black py-2 px-4 border-2 border-gray-500 rounded">
              Log In
            </button>
            <button className="bg-[#6A65FF] text-white py-2 px-4 rounded">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
