
import React from 'react';
import useSmallScreen from '../atoms/widthAtom';

const Hero1: React.FC = () => {
  const isSmallScreen = useSmallScreen();
  return (
    !isSmallScreen
      ? <div className='min-h-screen flex '>

        {/* Left Section */}
        <div className='bg-light2Brand h-screen w-1/3 flex items-center  overflow-hidden relative
          md:h-screen md:w-fulls '>

          {/* Rotated Blue Div */}
          <div className='bg-light3Brand h-2/5 w-2/3 relative z-10 rotate-[15deg] -translate-y-[100%] -ml-4 rounded-2xl' />

          {/* Phone Element */}
          <div className='bg-blue-300 h-[40rem] w-[22rem] absolute  right-0 z-30 transform --translate-y-1/3  rounded-2xl '>
            <img className=' rounded-2xl h-full w-full'
              src="img1.webp" alt="Description of the image" />
          </div>
        </div>

        {/* Right Section */}
        <div className='bg-light2Brand h-screen z-10 w-2/3 min-w-[35rem] flex relative overflow-hidden items-center '>
          <div className='bg-light3Brand h-2/5 w-1/5 absolute -bottom-10 -right-6 rotate-[15deg] translate-y-10 rounded-2xl z-10' />
          <div className=' h-1/2 z-10 w-full flex flex-col mr-24 '>

            <div className='bg-white h-1/3 pt-6 rounded-tr-[2.4rem]'>
              <h1 className='text-center ml-10 font-bold text-6xl text-light3Brand'>Phrase.Trade</h1>
            </div>

            <div className='bg-white h-1/3'>
              <h1 className='text-center  text-6xl text-Grey2'>Mint your own NFT</h1>
            </div>

          
        <div className="bg-white h-1/5 rounded">
          <div className="flex items-center justify-center bg-pink-200 ml-8 mr-8 z-20 text-purple-700 px-4 py-2 rounded-full h-full transform translate-y-1/2">
            <h1 className="text-center text-2xl min-w-[24rem] text-pink-500">
              Get ready to create History
            </h1>
          </div>
        </div>


          </div>

        </div>
      </div> : 



isSmallScreen
? <div className='min-h-screen flex flex-col'>
  {/* Left Section */}
  <div className='bg-light2Brand h-screen w-full flex-rows overflow-hidden relative
    md:h-screen md:w-fulls '>
    {/* Rotated Blue Div */}
    <div className='bg-light3Brand h-1/5 w-1/2 relative overflow-hidden z-10 rotate-[15deg] -translate-y-10  -mt-8 rounded-2xl' />



    {/* Phone Element */}
    <div className='gbg-blue-300 h-full w-full absolute left-1/2  z-20 transform -translate-x-1/2   -translate-y-16  rounded-2xl '>
      <img className=' rounded-2xl h-[35rem] w-[20rem] z-30 mx-auto pb-10'
        src="img1.webp" alt="Description of the image" />


        <div className='bg-light2Brand h-1/4 z-30 w-full flex-col  bottom-10 '>

        <div className='bg-white h-1/3 w-full py-2 rounded-tr-[2.4rem]'>
          <h1 className='text-center font-bold text-4xl text-light3Brand'>Phrase.Trade</h1>
        </div>

        <div className='bg-white h-1/3 w-full'>
          <h1 className='text-center  text-4xl text-Grey2'>Mint your own NFT</h1>
        </div>


      <div className="bg-white h-1/5 rounded">
          <div className="flex items-center justify-center bg-pink-200 ml-8 mr-8 z-20 text-purple-700 px-4 py-2 rounded-full h-full transform translate-y-1/2">
            <h1 className="text-center text-2xl min-w-[22rem] text-pink-500">
              Get ready to create History
            </h1>
          </div>
        </div>


        </div>
      

    </div>


    

  </div>


  
</div> : null




  );
};

export default Hero1;
