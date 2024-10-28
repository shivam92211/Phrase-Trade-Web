import React from 'react';
import useSmallScreen from '../atoms/widthAtom';  // Custom hook to detect screen size

// Component to render a responsive hero section
const Hero2: React.FC = () => {
  const isSmallScreen = useSmallScreen();  // Determine if the screen is small
  
  return (
    !isSmallScreen 
      ? (
        // Large screen layout
        <div className='flex relative min-h-screen'>
          
          {/* Left Section */}
          <div className='h-screen w-3/5 bg-light2Brand z-10 relative overflow-hidden'>
            
            {/* Decorative rotated blue div */}
            <div className='bg-light3Brand h-2/5 w-1/3 relative z-10 rotate-[15deg] -ml-6 -translate-y-10 rounded-2xl -mt-4' />

            {/* Text content: Title and description */}
            <div className='h-2/3 w-4/5 absolute z-20 flex-cols items-center justify-center left-16 top-24 transform'>
              <h1 className='text-center font-bold text-6xl text-Black pb-10'> Introduction </h1>
              <p className='text-justify text-2xl text-Black pt-10'>
                Using the appropriate utility classes from Tailwind CSS, you can 
                easily adjust the text size and make it bold in your React component.
                Feel free to experiment with different sizes and styles to achieve 
                your desired look!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className='h-screen w-2/5 bg-light2Brand z-20 relative overflow-hidden'>
            
            {/* Decorative rotated blue div */}
            <div className='bg-light3Brand h-2/5 w-2/3 absolute z-10 -bottom-10 rounded-2xl -right-6 rotate-[15deg] translate-y-10'/>
            
            {/* Image element */}
            <div className='h-[40rem] w-[20rem] absolute bottom-0 left-0 transform --translate-x-10 z-20'>
              <img className='rounded-2xl' src="img1.webp" alt="Description of the image" />
            </div>
          </div>
        </div>
      ) :

      isSmallScreen 
      ? (
        // Small screen layout
        <div className='min-h-screen flex flex-col'>
          
          {/* Section container */}
          <div className='h-screen w-full bg-light2Brand z-10 relative overflow-hidden'>
            
            {/* Decorative rotated blue div */}
            <div className='bg-light3Brand h-1/5 w-1/3 relative z-10 rotate-[15deg] -ml-6 -translate-y-10 rounded-2xl -mt-4' />
            
            {/* Text content: Title and description */}
            <div className='bbg-green-300 h-2/3 w-4/5 absolute z-20 flex-cols items-center justify-center top-16 left-1/2 transform -translate-x-1/2 -translate-y-10'>
              <h1 className='text-center font-bold text-4xl text-Black'> Introduction </h1>
              <p className='text-justify text-lg text-Black pt-4'>
                Using the appropriate utility classes from Tailwind CSS, you can 
                easily adjust the text size and make it bold in your React component.
                Feel free to experiment with different sizes and styles to achieve 
                your desired look!
              </p>

              {/* Image element for small screen */}
              <div className='h-[30rem] w-[20rem] relative bottom-0 left-1/2 transform -translate-x-1/2 z-20 pt-6'>
                <img className='rounded-2xl' src="img1.webp" alt="Description of the image" />
              </div>
            </div>
            
            {/* Additional decorative rotated blue div */}
            <div className='bg-light3Brand h-1/5 w-1/3 absolute z-10 -bottom-10 rounded-2xl -right-6 rotate-[15deg] translate-y-10'/>
          </div>
        </div>
      ) : null
  );
};

export default Hero2;
