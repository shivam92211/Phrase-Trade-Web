import React from 'react';
import useSmallScreen from '../atoms/widthAtom';


const Hero9: React.FC = () => {
  const isSmallScreen = useSmallScreen();

  return (
    !isSmallScreen 
      ?<div className="flex min-h-screen bg-purple-300">

      {/* Left section */}
      <div className="bg-light2Brand flex-cols w-1/2 h-screen relative overflow-hidden">
      <div className='bg-light3Brand h-2/5 w-2/5  absolute z-10 rotate-[15deg] -translate-y-10 left-0 -ml-16 -mt-14 rounded-2xl'/>


        <div className="h-1/3 w-1/2 relative top-20 left-20 z-20">
          <img src="/logo.svg" alt="Wardiere Inc. Logo" className="mb-4" />
          <h1 className="text-6xl font-bold text-pink-300">How to</h1>
          <h2 className="text-6xl font-bold text-black">Subscribe</h2>
        </div>

        <div className='relative h-2/3 w-full  top-20 left-20'>
        <ul className="text-lg">
          <li className="mb-4 mr-20 bg-light3Brand p-4 rounded-xl">
            1. Visit our website or mobile app
          </li>
          <li className="mb-4 mr-20 bg-light3Brand p-4 rounded-xl">
            2. Choose your desired plan
          </li>
          <li className="bg-light3Brand p-4 mr-20  rounded-xl">
            3. Enter payment details
          </li>
        </ul>
        </div>
        
      </div>

      {/* Right section */}
      {/* <div className="bg-yellow-300 w-1/2 h-screen relative">
        <div className="absolute top-0 right-0 flex justify-center items-center h-full w-full">
          <img
            src="/wardiere-phone.png"
            alt="Wardiere Inc. Payment App"
            className="h-5/6 object-contain"
          />
        </div>
      </div> */}

        <div className='bg-light2Brand h-screen w-1/2 relative overflow-hidden'>
        <div className='bg-light3Brand h-3/5 w-4/5 absolute -bottom-10 -right-6 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>

        


        <div className='h-full w-full absolute z-30 transform -translate-x-0 left-0 bottom-0'>

        <div className='abg-green-300 h-2/5 w-2/5 absolute bottom-20 right-1/4 transform aatranslate-y-16 z-20'>
        <img className=' rounded-2xl absolute bottom-0 border-2 border-black' src="img1.webp" alt="Description of the image" />
        </div>

        <div className='abg-yellow-300 pt-3 h-1/5 w-1/3 left-10 absolute bottom-24  transform translate-x-6 z-20'>
        <img className=' rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
        </div>

        <div className='abg-orange-300 pt-3  h-1/5 w-1/3 right-8 absolute bottom-24  transform translate-x-6 z-20'>
        <img className=' rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
        </div>
        </div>
        
        </div>

    </div>:



isSmallScreen 
?<div className="min-h-screen flex flex-col">

{/* Left section */}
<div className="bg-light2Brand flex-cols w-full h-screen relative overflow-hidden">
<div className='bg-light3Brand h-1/5 w-1/3   absolute z-10 rotate-[15deg] -translate-y-10 left-0 -ml-16 -mt-14 rounded-2xl'/>


  <div className="qbg-red-300 h-[10rem] w-3/4 left-1/2 transform -translate-x-1/2 relative z-20 top-[3rem]">
    {/* <img src="/logo.svg" alt="Wardiere Inc. Logo" className="mb-4" /> */}
    <h1 className=" text-4xl text-center font-bold text-pink-300">How to</h1>
    <h2 className="text-4xl text-center font-bold text-black">Subscribe</h2>
  </div>

  <div className='qbg-green-200 h-1/4 w-full absolute left-1/2 transform -translate-x-1/2'>  
  <ul className="text-lg">
    <li className="mb-4 mx-4 bg-light3Brand p-4 rounded-xl">
      1. Visit our website or mobile app
    </li>
    <li className="mb-4  bg-light3Brand p-4 mx-4 rounded-xl">
      2. Choose your desired plan
    </li>
    <li className="bg-light3Brand p-4 mx-4  rounded-xl">
      3. Enter payment details
    </li>
  </ul>
  </div>

  <div className='abg-yellow-300 h-1/2 w-full absolute z-30 transform -translate-x-0 left-0 bottom-0'>

  <div className='abg-green-300 h-2/5 w-2/5 absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20'>
  <img className=' rounded-2xl absolute bottom-0 border-2 border-black' src="img1.webp" alt="Description of the image" />
  </div>

  <div className='abg-yellow-300 pt-3 h-1/5 w-1/3 absolute bottom-24 transform left-1/4 -translate-x-1/2 z-20'>
  <img className=' rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
  </div>

  <div className='abg-orange-300 pt-3  h-1/5 w-1/3  absolute bottom-24  transform left-3/4 -translate-x-1/2 z-20'>
  <img className=' rounded-2xl absolute bottom-0 border-2 border-inherit' src="img1.webp" alt="Description of the image" />
  </div>
  </div>


<div className='bg-light3Brand h-1/5 w-1/3 absolute -bottom-10 -right-6 rotate-[9deg] translate-y-10 rounded-2xl z-10'/>
  
</div>

</div>:null


  );
};

export default Hero9;
