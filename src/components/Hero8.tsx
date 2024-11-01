import React from 'react';
import useSmallScreen from '../atoms/widthAtom';

// Component to render different layouts based on screen size
const Hero8: React.FC = () => {
  const isSmallScreen = useSmallScreen(); // Hook to detect screen size

  return (
    // Renders layout for larger screens if not a small screen
    !isSmallScreen 
      ? <div className='flex relative min-h-screen'>

          {/* Left section with background and rotated rectangle */}
          <div className='flex bg-light2Brand h-screen relative w-1/2 overflow-hidden'>
            <div className='bg-light3Brand h-2/5 w-2/5 relative z-10 rotate-[8deg] -translate-y-10 rounded-2xl -ml-2'/>

            {/* Title text centered within the left section */}
            <div className='h-1/5 w-2/3 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/4 z-20'>
              <h1 className='text-center font-bold text-6xl text-Black pb-10'>Benefits for Users</h1>
            </div>

            {/* Image positioned at the bottom center of the left section */}
            <div className='h-1/2 w-1/2 absolute left-1/2 transform -translate-x-1/2 bottom-10'>
              <img className='rounded-2xl' src="img1.webp" alt="Description of the image" />
            </div>
          </div>

          {/* Right section with multiple informational blocks */}
          <div className='bg-light2Brand h-screen w-1/2 relative overflow-hidden'>
            <div className='bg-light3Brand h-3/5 w-2/3 absolute z-10 -bottom-10 rounded-2xl -right-6 rotate-[15deg] translate-y-10'/>

            {/* Content area with Solution and Market Overview titles */}
            <div className='h-4/5 w-2/3 absolute z-30 transform -translate-x-0 left-0 bottom-0'>
              <div className='bg-light2Brand2 h-1/4 rounded-2xl '>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4 '>Solution Overview</h1>
              </div>
              <div className='bg-light2Brand2 h-1/4 rounded-2xl my-10 '>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
              </div>
              <div className='bg-light2Brand2 h-1/4 rounded-2xl mb-10 '>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4 '>Market Overview</h1>
              </div>
            </div>
          </div>
        </div>

      // Renders layout for smaller screens if detected as a small screen
      : isSmallScreen 
        ? <div className='min-h-screen flex flex-col'>

            {/* Full-width section for small screens with titles and images */}
            <div className='flex bg-light2Brand h-screen w-full relative overflow-hidden'>
              <div className='bg-light3Brand h-1/5 w-1/3 relative z-10 rotate-[8deg] -translate-y-10 rounded-2xl -ml-2'/>

              {/* Centered Benefits title */}
              <div className='abg-green-100 h-1/5 w-2/3 absolute left-1/2 transform -translate-x-1/2 translate-y-10 z-20'>
                <h1 className='text-center font-bold text-4xl text-pink-300 pb-4'>Benefits</h1>
                <h1 className='text-center font-bold text-4xl text-Black '>for Users</h1>
              </div>

              {/* Bottom-centered image */}
              <div className='h-1/2 w-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'>
                <img className='rounded-2xl' src="img1.webp" alt="Description of the image" />
              </div>

              {/* Informational blocks for Solution and Market Overview */}
              <div className='abg-yellow-200 h-2/3 w-4/5 absolute z-30 transform -translate-x-1/2 left-1/2 translate-y-1/4 bottom-0'>
                <div className='bg-light2Brand2 h-1/5 rounded-2xl '>
                  <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4 '>Solution Overview</h1>
                </div>
                <div className='bg-light2Brand2 h-1/5 rounded-2xl my-4 '>
                  <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
                </div>
                <div className='bg-light2Brand2 h-1/5 rounded-2xl '>
                  <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4 '>Market Overview</h1>
                </div>
              </div>

              {/* Decorative rotated rectangle at the bottom right */}
              <div className='bg-light3Brand h-1/5 w-1/3 absolute z-10 -bottom-10 rounded-2xl -right-6 rotate-[15deg] translate-y-10'/>
            </div>
          </div>
        : null
  );
};

export default Hero8;
