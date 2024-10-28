import React from 'react';
import useSmallScreen from '../atoms/widthAtom';


const Hero4: React.FC = () => {
  const isSmallScreen = useSmallScreen();

  return (
    !isSmallScreen 
      ?<div className="flex relative min-h-screen">

  <div className="bg-light2Brand h-screen w-1/2 relative overflow-hidden z-10">
    <div className="bg-light3Brand h-2/5 w-1/3 relative z-10 rotate-[15deg] -ml-6 -translate-y-10 rounded-2xl -mt-4"/>

    <div className="h-1/5 w-2/3 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/3 z-20">
    <h1 className='text-center font-bold text-6xl text-brand'> Market Overview</h1>
    </div>

    <div className="h-1/3 w-2/3 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0">
    <p className='text-justify text-xl'>
      Using the appropriate utility classes from Tailwind CSS, you can
      easily adjust the text size and make it bold in your React
      component. Feel free to experiment with different</p>
    </div>
  </div>


<div className="bg-light2Brand h-screen w-1/2 relative overflow-hidden overflow-x-hidden">
  <div className="bg-light3Brand h-3/4 w-full flex flex-col absolute z-30 -bottom-16 rounded-[2.4rem] rotate-[5deg] transform translate-x-6 ">

    <div className='h-3/4 w-full flex justify-between items-center px-[2.4rem] transform -translate-y-6'>

      <div className="abg-pink-500 h-full w-1/4 rounded-[1rem]">
      <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
      </div>

      <div className="abg-pink-500 h-full w-1/4 rounded-[1rem] transform -translate-y-1/4">
      <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
      </div>

      <div className="abg-pink-500 h-full w-1/4 rounded-[1rem] ">
      <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
      </div>

    </div>

    <div className='abg-blue-100 h-3/4 w-full px-[2.4rem] relative flex items-center'>

      <div className="abg-pink-500 h-full w-1/4 absolute left-[30%] transform -translate-x-1/2 rounded-[1rem]">
      <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
      </div>

      <div className="abg-pink-500 h-full w-1/4 absolute right-[30%] transform translate-x-1/2 rounded-[1rem]">
      <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
      </div>
    </div>

  </div>
</div>


</div>:






isSmallScreen 
? <div className="min-h-screen flex flex-col">

<div className="bg-light2Brand h-screen w-full relative overflow-hidden z-10">
  <div className="bg-light3Brand h-1/5 w-1/3 relative z-10 rotate-[15deg] -ml-6 -translate-y-10 rounded-2xl -mt-4"/>

  <div className="h-1/5 w-2/3 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
  <h1 className='text-center font-bold text-4xl text-brand'> Market </h1>
  <h1 className='text-center font-bold text-4xl text-brand'> Overview</h1>

  <p className='text-justify text-xl pt-10'>
    Using the appropriate utility classes from Tailwind CSS, you can
    easily adjust the text size and make it bold in your React
    component. Feel free to experiment with different</p>

  </div>

  <div className="bg-light3Brand h-2/5 w-full flex flex-col absolute z-30 -bottom-12 rounded-[2.4rem] rotate-[5deg] -right-5 translate-y">

  <div className='h-3/4 w-full flex justify-between items-center px-[2.4rem] transform -translate-y-4'>

    <div className="h-full w-[30%] rounded-[1rem]">
    <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
    </div>

    <div className="h-full w-[30%] rounded-[1rem] transform -translate-y-1/4">
    <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
    </div>

    <div className="h-full w-[30%] rounded-[1rem] ">
    <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
    </div>

  </div>

  <div className='abg-blue-100 h-3/4 w-full px-[2.4rem] relative flex items-center'>

    <div className=" h-full w-1/4 absolute left-[30%] transform -translate-x-1/2 rounded-[1rem]">
    <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
    </div>

    <div className="h-full w-1/4 absolute right-[30%] transform translate-x-1/2 rounded-[1rem]">
    <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
    </div>
  </div>

</div>
</div>



</div>:null




  );
};

export default Hero4;
