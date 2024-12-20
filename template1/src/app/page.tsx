import React from 'react'
import Image from 'next/image'

const home = () => {
  return (

<div className="max-w-screen-sm:screen max-w-screen-md:screen max-w-screen-lg:screen max-w-screen-xl:screen ">

      {/* hero section */}
        <div className='xl:w-screen h-auto lg:w-auto sm:w-[400px]   lg:h-auto items-center px-2 '>
        <Image src="/home/heroPic.png" alt="hero section" width={1390} height={80} />
        </div>

<section id="newarival" className='sm:flex sm:flex-col'>
      
        <h1 className='xl:font-extrabold xl:text-4xl lg:text-3xl sm:text-xl xl:text-center xl:py-10 sm:py-3 sm:-ml-40

      
        '>NEW ARRIVELS</h1>
        {/* realted items */}
              <div className='
              lg:flex lg:flex-row  justify-evenly 
                              sm:flex sm:flex-col sm:mx-28
              '>
          
           {/* card1 */}
          
            <div className='flex flex-col flex-start p-0 gap-[16px]  w-[270px] lg:h-[650px]  sm:h-[420px]'>
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/home/shirt1.png" alt="shirt1" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
            <h1 className='font-bold text-center'>T-shirt with Tape Details</h1>
           
             <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Half Star.png" alt='4half star' width={100} height={50} /> 4.5/5</p>
            <p className='text-2xl ml-11'>$120 </p>

              </div>
          
          
          
          
 {/* card 2 */}

          
            <div className=' flex flex-col flex-start p-0 gap-[16px]  w-[270px] lg:h-[650px] sm:h-[420px]'>
            
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/home/p2.png" alt="skinny fit jeans" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
                    <h1 className='font-bold text-center'>Skinny Fit Jeans</h1>
           
                          <p className='flex flex-row gap-2 px-12'> 
                  <Image src="/home/Three Half Star.png" alt='3half star' width={100} height={50} /> 3.5/5</p>
                  <p className='text-2xl flex flex-row justify-evenly ml-8'>$240  <s className='text-gray-400'> $260 </s> 
                  <p className=' bg-red-300 text-red-600 rounded-full w-[60px] text-[12px] text-center bg-opacity-25'> 
                          -20% </p> </p>

              </div>
          
{/* card 3 */}

              <div className=' flex flex-col flex-start p-0 gap-[16px] w-[270px] lg:h-[650px] sm:h-[420px] '>
                
                <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/home/p3.png" alt="checkered shirt" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
                </div>
             
                <h1 className='font-bold text-center '>Checkered Shirt</h1>
           
                  <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Half Star.png" alt='4half star' width={100} height={50} /> 4.5/5</p>
                        <p className='text-2xl ml-11'>$180 </p>

              </div>


{/* card 4 */}

          
              <div className=' flex flex-col flex-start p-0 gap-[16px]  w-[220px] h-[650px] '>
              <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg'>
              <Image src="/home/p4.png" alt="sleeve strip T-shirt" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
                </div>
             
                 <h1 className='font-bold text-center'>sleeve strip T-shirt</h1>
           
               <p className='flex flex-row gap-2 px-8'> 
              <Image src="/home/Four Half Star.png" alt='4half star' width={100} height={50} /> 4.5/5</p>
              <p className='text-2xl flex flex-row justify-evenly ml-9'>$130  <s className='text-gray-400'> $160 </s> 
              <p className=' bg-red-300 text-red-600 rounded-full w-[60px] text-[12px] text-center bg-opacity-25'> -30% </p> </p>

               </div>
            </div>
       <div className='xl: ml-[1038px]  xl:-mt-[15em]'>
       <button  className='outline outline-2 outline-blace xl:w-36 xl:h-10 rounded-full  sm:-ml-96'> View All </button>
       </div>
</section>     
       <hr className='mt-10 mb-10'/>

{/* Top Sealliing  */}


<section id="top selling">

      <div>
      <h1 className='xl:py-5 xl:mb-20 xl:text-[4em] lg:text-[3em] 
      sm:text-2xl sm:-ml-28 text-center font-extrabold'>
        TOP SELLING</h1>
      </div>


      <div className=' xl: flex lg:flex-row sm:flex-col 
       sm:ml-[125px] xl:ml-2 justify-evenly '>
          
         {/* card 1 */}

          
         <div className=' flex flex-col flex-start p-0 gap-[16px]   lg:w-[270px] sm:w-[200px] h-[650px] '>
            
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/home/p5.png" alt="Vertical Striped Shirt" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
                    <h1 className='font-bold text-center'>Vertical Striped Shirt</h1>
           
                          <p className='flex flex-row gap-2 px-12'> 
                  <Image src="/home/Five Star.png" alt='five star' width={100} height={50} /> 5/5</p>
                  <p className='text-2xl flex flex-row justify-evenly ml-8'>$212  <s className='text-gray-400'> $232 </s> 
                  <p className=' bg-red-300 text-red-600 rounded-full w-[60px] text-[12px] text-center bg-opacity-25'> 
                          -20% </p> </p>

              </div>
 
         
          {/* card2 */}
         
           <div className='flex flex-col flex-start p-0 gap-[16px] w-[270px] h-[650px]'>
           <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
             <Image src="/home/p6.png" alt="graphic T-shirt" width={180} height={180} 
             className=' position-absolute w-[190px] h-[180px] -mt-10'/>
            </div>
            
           <h1 className='font-bold text-center'>Courage Graphic T-shirt </h1>
          
            <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Star.png" alt='4star' width={100} height={50} />
             4.0/5</p>
           <p className='text-2xl ml-11'>$180 </p>

             </div>
             <div className=' flex flex-col justify-evenly '>
          
          {/* card3 */}
         
           <div className='flex flex-col  p-0 gap-[16px] w-[270px] h-[650px] '>
           <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
             <Image src="/home/p7.png" alt="Loos Fit Bermuda Short" width={180} height={180} 
             className=' position-absolute w-[190px] h-[180px] -mt-10'/>
            </div>
            
           <h1 className='font-bold text-center'>Loos Fit Bermuda Short</h1>
          
            <p className='flex flex-row gap-2 px-10'> 
              <Image src="/home/Three Star.png" alt='three star' width={60} height={9} /> 3.0/5</p>
           <p className='text-2xl ml-11'>$80 </p>

             
          {/* card4 */}
         
           <div className='flex flex-col flex-start p-0 gap-[16px] w-[270px] h-[650px] sm:-ml-40 xl:-ml-[800px] '>
           <div className='w-[250px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
             <Image src="/home/p8.png" alt="Faded Skinny Jeans" width={180} height={180} 
             className=' position-absolute w-[180px] h-[180px] -mt-10'/>
            </div>
            
           <h1 className='font-bold text-center'>Faded Skinny Jeans</h1>
          
            <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Half Star.png" alt='4half star' width={100} height={50} /> 4.5/5</p>
           <p className='text-2xl ml-11'>$210 </p>

           </div>
             </div>

            </div>        

</div>

</section>

{/* Browse by dress style */}
<section className='bg-gray-300 rounded-xl xl:w-[900px] sm:w-80 
xl:h-[266px] 
lg:ml-44 lg:mb-32 lg:pb-28 xl:mt-72 sm:grid '>
<div className='lg:text-center lg:font-extrabold lg:text-[3em] sm:text-[32px]
 sm:-mt-16'>BROWSE BY DRESS STYLE</div>
<div className=' xl:w-80 sm:w-[150px]  xl:h-90 xl:grid  xl:gap-3
xl:grid-cols-2 sm:flex sm:flex-col  lg:ml-80 sm:ml-1 lg:pb-24' >
<Image src="/home/dress style/casual.png" alt='casual' width={407} height={489}
className='rounded-2xl '/>
<Image src="/home/dress style/formal.png" alt='formal' width={684} height={489}
className=' rounded-xl '/>
<Image src="/home/dress style/party.png" alt='party' width={684} height={489}
className=' rounded-xl lg:mr-9 lg:mt-3 sm:mt-2'/>
<Image src="/home/dress style/gym.png" alt='gym' width={407} height={489}
className=' rounded-xl lg:-mt-9 lg:ml-3 sm:mt-5'/>
</div>
</section>

<div>
<h1 className='xl:text-3xl sm:text-[18px] xl:font-extrabold'>
  
  
  OUR HAPPY CUSTOMERS</h1>
<div className='xl:flex xl:flex-row lg:flex flex-row sm:flex-col px-14 lg:gap-20 lg:py-9'>
<div> <Image src="/comit/comt1.png" alt='comt1' width={284} height={189}/>
</div>
<div> <Image src="/comit/comt2.png" alt='comt2' width={284} height={189}/>
</div>
<div> <Image src="/comit/comt3.png" alt='comt3' width={284} height={189}/>
</div>
</div>
</div>

</div>




          )
}

          export default home
