import React from 'react'
import Image from 'next/image'
const cart = () => {
  return (
    <div>
     
     
     
     
      <h1 className=' text-2xl font-bold'>YOUR CART</h1>
    {/* items add */}
     

   <div className='

flex
flex-column
items-start;
py-[20px] 
gap-[24px]
position-absolute
w-[715px]
h-[508px]
left-[100px]
top-[276px]
outline outline-gray-500 outline-1 rounded-xl '>  
     <div className='h-20'>

 {/* card1 */}
              <Image src="/prod/shirt3.png" alt="shirt3" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] mt-20'/>
             </div>
             
            <h1 className='font-bold text-center mt-20'>Polo with Tipping Details</h1>
              <div className='mt-28 -ml-52'>               
                <p> Size : Large</p>
                <p>Color: White</p>
                </div>
              </div>
           <p className='text-2xl -mt-80 ml-52'>$145 </p>
         
           <div className='flex xl:flex-row sm:flex-col justify-evenly w-[450px] ml-80'>
            {/* incress or degress btn with buy  & like btn */}
           <div className='flex text-center gap-7 mt-7 xl:w-170 sm:w-[100px] h-8   
            bg-slate-400 rounded-full'>
              <button className='text-[18px] font-thin outline outline-1 rounded-sm bg-slate-400 text-center rounded-s-full w-[32px] h-[32px] '> - </button> 
              <span className=' bg-slate-400 text-black'>1</span> <button className='text-[18px]  font-thin rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] bg-gray-400 text-black rounded-e-full'> + </button>
            </div>
            

          



     </div>




{/*  items details */}
     <div className='outline outline-gray-500 outline-1 
     
     
     rounded-xl flex flex-col xl:ml-[53em] xl:-mt-[9em]'>

<h1> Order Summary</h1>

<p> Subtotal<span className='px-[12em]'>$565</span></p>
<p> Discount (-20%)<span className='px-[12em]'>-$113</span></p>
<p> Total<span className='px-[12em]'>$467</span></p>

<hr className='mt-10'/>


{/* apply */}
<button className='outline oultine-1 bg-black text-white 
              xl:mt-[28px] xl:w-[160px] sm:w-[126px] xl:ml-40 sm:-ml-3 mb-8 rounded-full 
h-[40px]'>Apply</button> 

{/* Add to the cart button */}
<button className='outline oultine-1 bg-black text-white 
              xl:mt-[28px] xl:w-[360px] sm:w-[126px] xl:ml-5 sm:-ml-3 mb-8 rounded-full 
h-[40px]'>Add To The Cart</button>          </div>

     </div>
    





  )
}

export default cart
