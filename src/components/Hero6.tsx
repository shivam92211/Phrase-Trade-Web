// Import React and the custom hook for checking screen width
import React from 'react';
import useSmallScreen from '../atoms/widthAtom';

// Define the Hero6 functional component
const Hero6: React.FC = () => {
  // Use the custom hook to determine if the screen is small
  const isSmallScreen = useSmallScreen();

  return (
    // Conditionally render content based on screen size
    !isSmallScreen 
      ? <div className='flex min-h-screen'>
          {/* Left section for larger screens */}
          <div className='bg-light2Brand h-screen w-1/2 relative'>
            {/* Decorative angled background shape */}
            <div className='bg-light3Brand h-2/5 w-1/2 relative overflow-hidden z-10 rotate-[15deg] -translate-y-10 -ml-4 -mt-4 rounded-2xl'/>

            {/* Content section with heading and market overview items */}
            <div className='h-2/3 w-3/5 absolute left-1/4 top-1/4 z-20'>
              <div className='h-1/4 rounded-2xl'>
                <h1 className='text-left font-bold text-6xl text-pink-300 pt-2'>Solution Overview</h1>
              </div>
              {/* Multiple market overview boxes */}
              <div className='bg-light3Brand h-1/4 rounded-2xl my-10'>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
              </div>
              <div className='bg-light3Brand h-1/4 rounded-2xl mb-10'>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
              </div>
            </div>
          </div>

          {/* Right section for larger screens */}
          <div className='bg-light2Brand h-screen w-1/2 relative overflow-hidden'>
            {/* Angled background shape for visual interest */}
            <div className='bg-light3Brand h-3/5 w-4/5 absolute -bottom-10 -right-6 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>
            
            {/* Image overlay section with two images */}
            <div className='abg-green-200 h-3/4 w-3/5 absolute z-30 transform translate-y-20 left-1/2 -translate-x-1/2'>
              <div className='h-[35rem] w-[18rem] absolute bottom-0 right-0 transform --translate-x-10 z-20'>
                <img className='rounded-2xl border-2 border-black' src="img1.webp" alt="Description of the image" />
              </div>
              <div className='h-[28rm] w-[14rem] left-1/4 absolute bottom-12 transform -translate-x-1/2 z-20'>
                <img className='rounded-2xl border-2 border-inherit' src="img1.webp" alt="Description of the image" />
              </div>
            </div>
          </div>
        </div> 
      
      // If the screen is small, render alternative content layout
      : isSmallScreen 
        ? <div className='min-h-screen flex flex-col'>
            {/* Background and main container for small screens */}
            <div className='bg-light2Brand h-screen w-full relative overflow-hidden'>
              {/* Decorative angled background shape */}
              <div className='bg-light3Brand h-1/5 w-1/3 relative z-10 rotate-[15deg] -translate-y-10 -ml-4 -mt-4 rounded-2xl'/>

              {/* Container for main content with centered layout */}
              <div className='gbg-gray-50 h-2/5 w-4/5 absolute left-1/2 transform -translate-x-1/2 -translate-y-20 z-20'>
                {/* Headings for the solution overview */}
                <div className='h-1/4 rounded-2xl'>
                  <h1 className='text-center font-bold text-4xl text-blue-500 pt-2'>Solution</h1>
                  <h1 className='text-center font-bold text-4xl text-pink-300 pt-2'>Overview</h1>
                </div>
                {/* Market overview boxes */}
                <div className='bg-light3Brand h-1/4 rounded-2xl mt-10 mb-4'>
                  <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
                </div>
                <div className='bg-light3Brand h-1/4 rounded-2xl'>
                  <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
                </div>

                {/* Image section for small screens */}
                <div className='abg-green-200 h-full w-4/5 absolute z-30 transform translate-y-20 left-1/2 -translate-x-1/2'>
                  <div className='h-[24rem] w-[14rem] absolute bottom-0 right-0 transform --translate-x-10 z-20'>
                    <img className='rounded-2xl border-2 border-black' src="img1.webp" alt="Description of the image" />
                  </div>
                  <div className='h-[18rem] w-[12rem] aleft-10 absolute bottom-24 left-0 transform translate-y-1/4 mb-3 translate-x-6 z-20'>
                    <img className='rounded-2xl border-2 border-inherit' src="img1.webp" alt="Description of the image" />
                  </div>
                </div>
              </div>
              {/* Bottom decorative shape for small screens */}
              <div className='bg-light3Brand h-1/5 w-1/3 absolute -bottom-0 -right-2 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>
            </div>
          </div> 
        : null // Render nothing if no condition is met
  );
};

// Export the Hero6 component as default
export default Hero6;
