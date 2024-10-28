import React from 'react';
import useSmallScreen from '../atoms/widthAtom';


const Hero3: React.FC = () => {
  const isSmallScreen = useSmallScreen();

  return (

    !isSmallScreen 
      ?<div className='flex relative min-h-screen'>

        <div className=' flex bg-light2Brand h-screen relative  w-2/5 moverflow-hidden'>

        <div className='bg-light3Brand h-1/5 w-1/3 relative z-10 rotate-[15deg] -ml-6 -translate-y-10 rounded-2xl -mt-4'/>

        <div className=' h-1/5 w-2/3 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/3 z-20'>
        <h1 className='text-center font-bold text-6xl text-Black pb-10'> App Main Features </h1>
        </div>

        <div className='h-[30rem] w-[18rem] absolute left-1/2 transform -translate-x-1/2 bottom-0'>
        <img className=' rounded-2xl ' src="img1.webp" alt="Description of the image" />
        </div>
        </div>


        <div className="bg-light2Brand h-screen w-3/5 relative">
          <div className="bg-light3Brand h-3/5 w-full absolute bottom-0 grid grid-cols-2 grid-rows-2 gap-4 p-4 rounded-tl-[2.5rem]">

            <div >
            <div className="bg-pink-200 text-purple-700 rounded-full inline-blok h-8 w-8">
              <h1 className='text-center text-2xl text-Pink'>1</h1>
            </div>
              <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
              <p className='text-justify pr-12 mb-2 '>Using the appropriate utility classes from Tailwind CSS, you can
                 easily adjust the text size and make it bold in your React
                  component. Feel free to experiment with different</p>
            </div>

            <div >
            <div className="bg-pink-200 text-purple-700 rounded-full inline-blok h-8 w-8">
              <h1 className='text-center text-2xl text-Pink'>1</h1>
            </div>
              <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
              <p className='text-justify pr-12 mb-2 '>Using the appropriate utility classes from Tailwind CSS, you can
                 easily adjust the text size and make it bold in your React
                  component. Feel free to experiment with different</p>
            </div>

            <div >
            <div className="bg-pink-200 text-purple-700 rounded-full inline-blok h-8 w-8">
              <h1 className='text-center text-2xl text-Pink'>1</h1>
            </div>
              <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
              <p className='text-justify pr-12 mb-2 '>Using the appropriate utility classes from Tailwind CSS, you can
                 easily adjust the text size and make it bold in your React
                  component. Feel free to experiment with different</p>
            </div>

            <div >
            <div className="bg-pink-200 text-purple-700 rounded-full inline-blok h-8 w-8">
              <h1 className='text-center text-2xl text-Pink'>1</h1>
            </div>
              <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
              <p className='text-justify pr-12 mb-2 '>Using the appropriate utility classes from Tailwind CSS, you can
                 easily adjust the text size and make it bold in your React
                  component. Feel free to experiment with different</p>
            </div>

          </div>
        </div> 

    </div>:






isSmallScreen 
? <div className='min-h-screen flex flex-col'>

<div className=' flex bg-light2Brand h-screen w-full relative overflow-hidden'>

    <div className='bg-light3Brand h-1/5 w-1/3 relative z-10 rotate-[15deg] -ml-6 -translate-y-10 rounded-2xl -mt-4'/>

    <div className=' h-1/5 w-2/3 absolute left-1/2 transform -translate-x-1/2 translate-y-16  z-20'>
    <h1 className='text-center font-bold text-4xl text-Black pb-10'> App Main Features </h1>
    </div>

    <div className="bg-light3Brand h-3/4 w-full absolute bottom-0 flex flex-col  gap-4 p-4 rounded-tl-[2.5rem]">

    <div >
  
      <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
      <p className='text-justify'>Using the appropriate utility classes from Tailwind CSS, you can
         easily adjust the text size and make it bold in your React
          component. Feel free to experiment</p>
    </div>

    <div >
  
      <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
      <p className='text-justify'>Using the appropriate utility classes from Tailwind CSS, you can
         easily adjust the text size and make it bold in your React
          component. Feel free to experiment</p>
    </div>

    <div >
  
      <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
      <p className='text-justify '>Using the appropriate utility classes from Tailwind CSS, you can
         easily adjust the text size and make it bold in your React
          component. Feel free to experiment</p>
    </div>

    <div >
    
      <h1 className='font-bold text-md text-Black'>Buget Tracking</h1>
      <p className='text-justify '>Using the appropriate utility classes from Tailwind CSS, you can
         easily adjust the text size and make it bold in your React
          component. Feel free to experiment</p>
    </div>

  </div>

</div>


</div>: null


  );
};

export default Hero3;
