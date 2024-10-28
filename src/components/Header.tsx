// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <div className="bg-light2Brand flex justify-between items-center  p-4 text-black">
//       <div className="flex-grow" /> {/* This empty div takes up space to push links to the right */}
//       <nav className="space-x-4">
//         <a href="/" className="text-pink-500">Home</a>
//         <a href="/about" className="hover:text-pink-500">About Us</a>
//         <a href="/services" className="hover:text-pink-500">Service</a>
//         <a href="/contact" className="hover:text-pink-500">Contact</a>
//       </nav>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-[5rem] flex items-center justify-between shadow-xl max-container padding-container relative z-30 py-2 px-6 bg-light2Brand">
      {/* Brand Name */}
      <a href="/" className="flex-grow">
        <h1 className="text-2xl font-bold text-black">Your Brand</h1>
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex space-x-6 text-lg text-black">
        <li>
          <a href="/" className="hover:text-pink-500">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-pink-500">About Us</a>
        </li>
        <li>
          <a href="/services" className="hover:text-pink-500">Service</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-pink-500">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="lg:hidden cursor-pointer">
        {menuOpen ? <AiOutlineClose size={25} className="text-black" /> : <AiOutlineMenu size={25} className="text-black" />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] h-full bg-light2Brand p-10 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
      >
        <div className="flex justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-black" />
          </div>
        </div>

        <ul className="mt-8 space-y-6 text-lg text-black">
          <li onClick={() => setMenuOpen(false)}>
            <a href="/">Home</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/about">About Us</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/services">Service</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
