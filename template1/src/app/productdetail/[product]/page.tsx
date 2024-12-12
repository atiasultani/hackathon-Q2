import React from 'react'
import Image from 'next/image';

export default  async function Product(){

  const getData=await fetch("https://simple-book-api.glitch.me/book")
  const booksData=getData.json() 
   console.log("Book Data:",booksData);
   return (
    <div>

            
<div>
<h1 className='font-bold text-[20px]'>One Life Graphic T-shirt</h1>
          <div className='flex flex-row'> <Image src="/home/Four Half Star.png" alt='4 H star' width={100} height={100} />
            <span>4.5/5</span></div> 
  <div className='
bg-red-500
text-white
rounded-full
text-center
position-relative
w-[50px]
h-[26px]
py-1
ml-4
'>-40%</div>
            </div>

            <p className='text-3xl'>$ 260 <s className='text-gray-500'> $300</s></p>
            <p>This graphic t-shirt which is perfect for any occasion. <br/>Crafted from a soft and breathable fabric,<br/> it offers superior comfort and style.</p>
          
          <hr className='w-[400px] mt-3'/>

          {/* colour selection */}
          <div>
            <h1 className=' flex felx-row py-5 font-400 text-[20px] gap-3 text-gray-400'> Select Colors :
              <p className='w-8 h-8 rounded-full bg-amber-950  
   outline-black outline-8  
  flex justify-center'>
                <input type='checkbox' name='color' value="colored" /></p>
              <p className='w-8 h-8 rounded-full bg-green-950  
   outline-black outline-8  
  flex justify-center'>
                <input type='checkbox' name='color' value="colored" /></p>
                <p className='w-8 h-8 rounded-full bg-blue-900  
   outline-black outline-8  
  flex justify-center'>
                <input type='checkbox' name='color' value="colored" /></p>
            </h1>
          </div>

          <hr className='w-[400px] mt-3'/>

          {/* size button */}
          <h1 className='font-400 text-[20px] line-height-[20px] 
          text-gray-400 py-2'> Choose Size : </h1>
          <div className='flex xl:flex-row  sm:flex-col gap-4 py-2 '>
            <button className='rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] sm:mb-2'>Small</button>
            <button className='rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] sm:mb-2'>Medium</button>
            <button className='rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] sm:mb-2'>Lrage</button>
            <button className='rounded-full    bg-gray-100 text-gray-400 text-center w-[86px] h-[46px]  '> X-Lrage</button>
          </div>

          <hr className='w-[400px] mt-3'/>

          <div className='flex xl:flex-row sm:flex-col justify-evenly w-[450px]'>
            {/* incress or degress btn with buy  & like btn */}
           <div className='flex text-center gap-7 mt-7 xl:w-170 sm:w-[100px] h-8   
            bg-slate-400 rounded-full'>
              <button className='text-[18px] font-thin outline outline-1 rounded-sm bg-slate-400 text-center rounded-s-full w-[32px] h-[32px] '> - </button> 
              <span className=' bg-slate-400 text-black'>1</span> <button className='text-[18px]  font-thin rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] bg-gray-400 text-black rounded-e-full'> + </button>
            </div>
            {/* Add to the cart button */}
            <button className='outline oultine-1 bg-black text-white 
              xl:mt-[28px] xl:w-[360px] sm:w-[126px] xl:ml-5 sm:-ml-3 mb-8 rounded-full 
h-[40px]'>Add To The Cart</button>          </div>

</div>






  )
}
