// Import necessary React components and custom hook to check for screen size
import React from 'react';
import useSmallScreen from '../atoms/widthAtom';

const Hero7: React.FC = () => {
  // Determine if the screen size is small
  const isSmallScreen = useSmallScreen();

  return (
    !isSmallScreen 
      ? <div className='flex min-h-screen'>
          
          {/* Left side of the hero section for larger screens */}
          <div className='bg-light2Brand h-screen w-1/2 relative'>
            {/* Decorative background element */}
            <div className='bg-light3Brand h-2/5 w-1/2 relative overflow-hidden z-10 rotate-[9deg] -translate-y-10 -ml-4 -mt-4 rounded-2xl'/>

            {/* Container for main content on the left side */}
            <div className='h-2/3 w-3/5 absolute left-1/4 top-1/4 z-20'>
              
              {/* Header section */}
              <div className='h-1/3 rounded-2xl'>
                <h1 className='text-left font-bold text-6xl text-pink-300 pt-2'>User-friendly Interface</h1>
              </div>

              {/* Description section */}
              <div className='h-1/2 rounded-2xl my-10'>
                <h1 className='text-left font-bold text-lg text-brand pt-2'>Market Overview</h1>
                <p className='text-left text-md'>
                  Using the appropriate utility classes from Tailwind CSS, you can
                  easily adjust the text size and make it bold in your React
                  component. Feel free to experiment with different styles.
                </p>
              </div>
            </div>
          </div>

          {/* Right side of the hero section for larger screens */}
          <div className='bg-light2Brand h-screen w-1/2 relative overflow-hidden'>
            {/* Decorative rotated background element */}
            <div className='bg-light3Brand h-3/5 w-4/5 absolute -bottom-10 -right-6 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>

            {/* Image container with two images on the right */}
            <div className='h-full w-4/5 absolute z-30 transform -translate-x-16 left-0 bottom-0'>
              <div className='h-[35rem] w-[18rem] absolute bottom-0 ---right-0 transform translate-x-1/2 --translate-y-16'>
                <img className='rounded-2xl absolute bottom-0 border-2 border-black' src="img1.webp" alt="Description of the image" />
              </div>
              <div className='pt-3 h-[24rem] w-[14rem] left-10 absolute bottom-0 transform translate-x-6 z-20'>
                <img className='rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
              </div>
            </div>
          </div>
        </div>
      : // Mobile layout for small screens
      isSmallScreen 
      ? <div className='min-h-screen flex flex-col'>

          {/* Full-screen container with decorative background */}
          <div className='bg-light2Brand h-screen w-full relative overflow-hidden'>
            <div className='bg-light3Brand h-1/5 w-1/2 relative z-10 rotate-[9deg] -translate-y-10 -ml-4 -mt-4 rounded-2xl'/>

            {/* Main content container in mobile view */}
            <div className='qbg-green-200 h-2/5 w-4/5 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-20'>
              
              {/* Header section */}
              <div className='h-full abg-red-300 rounded-2xl'>
                <h1 className='text-center font-bold text-4xl text-pink-300 apt-6 pb-2'>User-friendly</h1> 
                <h1 className='text-center font-bold text-4xl text-pink-300 pb-6'>Interface</h1>
                <p className='text-center text-lg'>
                  Using the appropriate utility classes from Tailwind CSS, you can
                  easily adjust the text size and make it bold in your React
                  component. Feel free to experiment with different styles.
                </p>
              </div>
            </div>

            {/* Image container with two images in mobile view */}
            <div className='abg-green-200 h-1/2 w-4/5 flex absolute z-30 transform -translate-x-1/2 left-1/2 bottom-10'>
              <div className='h-[28rem] w-[15rem] absolute bottom-0 right-0 transform -translate-x-1/2'>
                <img className='rounded-2xl absolute bottom-0 border-2 border-black' src="img1.webp" alt="Description of the image" />
              </div>
              <div className='pt-3 h-[20rem] w-[12rem] absolute bottom-0 transform translate-x-1/2 z-20'>
                <img className='rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
              </div>
            </div>

            {/* Additional decorative background element */}
            <div className='bg-light3Brand h-1/5 w-1/3 absolute bottom-0 -right-2 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>
          </div>
        </div>
      : null
  );
};

export default Hero7;
