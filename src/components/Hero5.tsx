import React from 'react';
import useSmallScreen from '../atoms/widthAtom';

const Hero5: React.FC = () => {
  // Get a boolean indicating if the screen size is small
  const isSmallScreen = useSmallScreen();

  return (
    // Render different layouts based on screen size
    !isSmallScreen 
      ? <div className='flex min-h-screen'>
        
        {/* Left half of the screen for larger displays */}
        <div className='bg-light2Brand h-screen w-2/5 overflow-hidden relative'>
          {/* Decorative angled background element */}
          <div className='bg-light3Brand h-2/5 w-1/2 relative overflow-visible z-10 rotate-[15deg] -translate-y-10 -ml-6 rounded-2xl'/>
          {/* Image section */}
          <div className='qbg-blue-300 h-[35rem] w-[18rem] absolute right-0 z-30 transform -translate-y-1/4 rounded-t-2xl'>
            <img className='rounded-2xl' src="img1.webp" alt="Description of the image" />
          </div>
        </div>

        {/* Right half of the screen for larger displays */}
        <div className='bg-light2Brand h-screen w-3/5 overflow-hidden relative'>
          {/* Decorative angled background element */}
          <div className='bg-light3Brand h-2/5 w-2/5 absolute -bottom-10 -right-8 rotate-[15deg] translate-y-10 rounded-2xl z-10'/>
          
          {/* Main content area */}
          <div className='absolute flex-cols h-3/4 w-2/3 z-30 left-10 transform translate-y-1/4'>
            {/* Title */}
            <div className='h-1/3'>
              <h1 className='text-left font-bold text-6xl text-pink-300 mb-2'>Phrase.Trade</h1>
              <h1 className='text-left font-bold text-6xl text-dark'>Mint your NFTs</h1>
            </div>

            {/* Buttons or sections */}
            <div className='h-2/3'>
              <div className='bg-light3Brand h-14 w-2/3 rounded-2xl mb-10'>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
              </div>
              <div className='bg-light3Brand h-14 w-2/3 rounded-2xl mb-10'>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
              </div>
              <div className='bg-light3Brand h-14 w-2/3 rounded-2xl mb-10'>
                <h1 className='text-left font-bold text-lg text-brand pt-2 pl-4'>Market Overview</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

      // Render for small screens
      : isSmallScreen 
      ? <div className='min-h-screen flex flex-col'>
        
        {/* Full screen background for smaller displays */}
        <div className='bg-light2Brand h-screen w-full overflow-hidden relative'>
          {/* Decorative angled background element */}
          <div className='bg-light3Brand h-1/5 w-1/3 relative overflow-visible z-10 rotate-[15deg] -translate-y-10 -ml-4 rounded-2xl'/>
          
          {/* Content container */}
          <div className='bbg-slate-100 absolute flex-cols h-full w-full z-30 transform -translate-y-24'>
            {/* Title */}
            <div className='bbg-teal-100 h-1/5'>
              <h1 className='h-[50%] text-center font-bold text-4xl text-pink-300 pt-4'>Phrase.Trade</h1>
              <h1 className='h-[50%] text-center font-bold text-4xl text-dark'>Mint your NFTs</h1>
            </div>

            {/* Buttons or sections */}
            <div className='h-1/3 bbg-green-200 flex flex-col items-center'>
              <div className='bg-light3Brand flex justify-center h-14 w-2/3 rounded-2xl my-auto mx-auto'>
                <h1 className='text-center font-bold text-lg text-brand my-auto mx-auto'>Market Overview</h1>
              </div>
              <div className='bg-light3Brand flex justify-center h-14 w-2/3 rounded-2xl my-auto mx-auto'>
                <h1 className='text-center font-bold text-lg text-brand my-auto mx-auto'>Market Overview</h1>
              </div>
              <div className='bg-light3Brand flex justify-center h-14 w-2/3 rounded-2xl my-auto mx-auto'>
                <h1 className='text-center font-bold text-lg text-brand my-auto mx-auto'>Market Overview</h1>
              </div>
            </div>

            {/* Image section */}
            <div className='h-[35%] w-[40%] min-h-[20rem] min-w-[10rem] absolute left-1/2 -translate-x-1/2 z-30 transform translate-y-4 rounded-t-2xl'>
              <img className='rounded-2xl' src="img1.webp" alt="Description of the image" />
            </div>
          </div>

          {/* Decorative angled background element */}
          <div className='bg-light3Brand h-1/5 w-1/3 absolute -bottom-10 -right-0 rotate-[15deg] translate-y-10 rounded-2xl z-10'/>
        </div>

      </div> : null
  );
};

export default Hero5;
