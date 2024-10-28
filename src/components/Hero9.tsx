import React from 'react';
import useSmallScreen from '../atoms/widthAtom'; // Custom hook to determine screen size

const Hero9: React.FC = () => {
  const isSmallScreen = useSmallScreen(); // Check if the screen is small

  return (
    // Render different layouts based on screen size
    !isSmallScreen 
      ? <div className="flex min-h-screen bg-purple-300">

        {/* Left section */}
        <div className="bg-light2Brand flex-cols w-1/2 h-screen relative overflow-hidden">
          {/* Decorative element on the left */}
          <div className='bg-light3Brand h-2/5 w-2/5 absolute z-10 rotate-[15deg] -translate-y-10 left-0 -ml-16 -mt-14 rounded-2xl'/>

          {/* Title section with logo and headings */}
          <div className="h-1/3 w-1/2 relative top-20 left-20 z-20">
            <img src="/logo.svg" alt="Wardiere Inc. Logo" className="mb-4" />
            <h1 className="text-6xl font-bold text-pink-300">How to</h1>
            <h2 className="text-6xl font-bold text-black">Subscribe</h2>
          </div>

          {/* Instructions list */}
          <div className='relative h-2/3 w-full top-20 left-20'>
            <ul className="text-lg">
              <li className="mb-4 mr-20 bg-light3Brand p-4 rounded-xl">
                1. Visit our website or mobile app
              </li>
              <li className="mb-4 mr-20 bg-light3Brand p-4 rounded-xl">
                2. Choose your desired plan
              </li>
              <li className="bg-light3Brand p-4 mr-20 rounded-xl">
                3. Enter payment details
              </li>
            </ul>
          </div>
        </div>

        {/* Right section */}
        <div className='bg-light2Brand h-screen w-1/2 relative overflow-hidden'>
          {/* Decorative element on the right */}
          <div className='bg-light3Brand h-3/5 w-4/5 absolute -bottom-10 -right-6 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>

          {/* Image section with multiple images */}
          <div className='abg-green-900 h-1/2 w-4/5 mx-4 absolute z-30 transform top-1/2 -translate-y-1/3 right-0'>
            {/* Main image */}
            <div className='abg-green-300 h-2/5 w-2/5 absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20'>
              <img className='rounded-2xl absolute bottom-0 border-2 border-black' src="img1.webp" alt="Description of the image" />
            </div>

            {/* Additional images positioned differently */}
            <div className='abg-yellow-300 pt-3 h-1/5 w-1/3 right-3/4 absolute bottom-24 transform translate-x-1/4 z-20'>
              <img className='rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
            </div>

            <div className='abg-orange-300 pt-3 h-1/5 w-1/3 left-3/4 absolute bottom-24 transform -translate-x-1/4 z-20'>
              <img className='rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
            </div>
          </div>
        </div>
      </div> :

    // Layout for small screens
    isSmallScreen 
      ? <div className="min-h-screen flex flex-col">
        {/* Left section for small screens */}
        <div className="bg-light2Brand flex-cols w-full h-screen relative overflow-hidden">
          {/* Decorative element on the left */}
          <div className='bg-light3Brand h-1/5 w-1/3 absolute z-10 rotate-[15deg] -translate-y-10 left-0 -ml-16 -mt-14 rounded-2xl'/>

          {/* Title section with headings for small screens */}
          <div className="qbg-red-300 h-[10rem] w-3/4 left-1/2 transform -translate-x-1/2 relative z-20 top-[3rem]">
            <h1 className="text-4xl text-center font-bold text-pink-300">How to</h1>
            <h2 className="text-4xl text-center font-bold text-black">Subscribe</h2>
          </div>

          {/* Instructions list for small screens */}
          <div className='qbg-green-200 h-1/4 w-full absolute left-1/2 transform -translate-x-1/2'>  
            <ul className="text-lg">
              <li className="mb-4 mx-4 bg-light3Brand p-4 rounded-xl">
                1. Visit our website or mobile app
              </li>
              <li className="mb-4 bg-light3Brand p-4 mx-4 rounded-xl">
                2. Choose your desired plan
              </li>
              <li className="bg-light3Brand p-4 mx-4 rounded-xl">
                3. Enter payment details
              </li>
            </ul>
          </div>

          {/* Image section for small screens */}
          <div className='abg-yellow-300 h-[28rem] w-[26rem] absolute z-30 transform -translate-x-1/2 left-1/2 bottom-0'>
            <div className='abg-green-300 h-[24rem] w-[14rem] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 rounded-2xl'>
              <img className='rounded-2xl absolute bottom-0 border-2 border-black' src="img1.webp" alt="Description of the image" />
            </div>
            <div className='abg-yellow-300 pt-3 h-[18rem] w-[12rem] absolute bottom-6 transform left-1/4 -translate-x-1/2 z-20'>
              <img className='rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
            </div>
            <div className='abg-orange-300 pt-3 h-[18rem] w-[12rem] absolute bottom-6 transform left-3/4 -translate-x-1/2 z-20'>
              <img className='rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
            </div>
          </div>

          {/* Decorative element on the right for small screens */}
          <div className='bg-light3Brand h-1/5 w-1/3 absolute -bottom-10 -right-6 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>
        </div>
      </div> : null
  );
};

export default Hero9;
