import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const productdetail = () => {
  return (
<div>
    <div>
      {/* routes links */}
      <div className='py-4 px-24'>
        <p>
         <Link href="/"> Home </Link>  /
          <Link href="/"> Shop</Link>  /
          <Link href="/"> Man</Link>  /
          T-Shirt
        </p>
      </div>

    

      <div className=' grid grid-flow-col'>
        {/* side  images  */}
        <div className='flex justify-evenly flex-col ml-40  h-80 mt-20 gap-14'>
          <div className='
position-absolute
w-170px
h-170px'>
            <Image src="/prod/proS1.png" alt='p1' width={130} height={80} />
          </div>
          <div className='
position-absolute
w-170px
h-170px'>
            <Image src="/prod/proS2.png" alt='p2' width={130} height={80} />
          </div>
          <div className='
position-absolute
w-170
h-170'>
            <Image src="/prod/proS3.png" alt='pros3' width={130} height={90} />
          </div>
          
        </div>
        {/* main image */}
        <div className='
position-absolute
w-[450px]
h-[650px]
mt-20'>
          <Image src="/prod/main.png" alt='main' width={446} height={646} />
        </div>

        {/* text details */}
        <div className='w-75 h-80  mt-20'>
          <h1 className='font-bold text-[20px]'>One Life Graphic T-shirt</h1>
          <div className='flex flex-row'> <Image src="/home/Four Half Star.png" alt='4 H star' width={100} height={100} />
            <span>4.5/5</span> 
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
          <h1 className='font-400 text-[20px] line-height-[20px] text-gray-400 py-2'> Choose Size : </h1>
          <div className='flex flex-row gap-4 py-2 '>
            <button className='rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '>Small</button>
            <button className='rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '>Medium</button>
            <button className='rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '>Lrage</button>
            <button className='rounded-full    bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '> X-Lrage</button>
          </div>

          <hr className='w-[400px] mt-3'/>

          <div className='flex justify-evenly w-[450px]'>
            {/* incress or degress btn with buy  & like btn */}
           <div className='flex text-center gap-7 mt-7 w-170 h-8  bg-slate-400 rounded-full'>
              <button className='text-[18px]  font-thin outline outline-1 rounded-sm bg-slate-400 text-center rounded-s-full w-[32px] h-[32px] '> - </button> 
              <span className=' bg-slate-400 text-black'>1</span> <button className='text-[18px]  font-thin rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] bg-gray-400 text-black rounded-e-full'> + </button>
            </div>
            {/* Add to the cart button */}
            <button className='outline oultine-1 bg-black text-white mt-[28px] w-[360px] ml-5 mb-8 rounded-full 
h-[40px]'>Add To The Cart</button>          </div>

</div>
</div>
<div className=' flex justify-evenly text-gray-400 '>
<Link href="/"  className='hover:text-black hover:underline'> Product Detial</Link>
<Link href="/" className='hover:text-black hover:underline'> Rating & Reviews</Link>
<Link href="/" className='hover:text-black hover:underline'> FAQs</Link>

</div>
<hr className='py-9'/>
{/* All review */}
<div>
<div className='font-bold flex flex-row px-6 py-6'> All Reviews <p className='text-[14px]'>(451)</p> </div>
<div className=' flex flex-row gap-5 ml-[55em]'>
  <button className='rounded-full bg-gray-300 w-[50px] h-[50px]'> <Image src="/prod/b1.png" alt=" b1" width={25} height={25} className='ml-3'/></button>
<button className='rounded-full bg-gray-300 w-[90px] h-[50px]'><select className='bg-gray-300 outline-none'> <option> Latest </option><Image src="/prod/drop down.png" alt=" dropdown" width={5} height={5} /></select> </button>
<button className='outline oultine-1 bg-black text-white mt-[5px] w-[120px] ml-5 mb-8  rounded-full 
h-[40px]'>Write a Reiew</button> 
 </div>
</div>
</div>
<div className='grid grid-cols-2 w-45  ml-30 py-8 gap-2'>
<Image src="/prod/c1.png" alt="comment1" width={410} height={241} className='ml-28 '/>
<Image src="/prod/c2.png" alt="comment2" width={410} height={241} className=' '/>
<Image src="/prod/c3.png" alt="comment3" width={410} height={241} className='ml-28'/>
<Image src="/prod/c4.png" alt="comment4" width={410} height={241} className=''/>
<Image src="/prod/c5.png" alt="comment5" width={410} height={241} className='ml-28'/>
<Image src="/prod/c6.png" alt="comment6" width={410} height={241} className=''/>
</div>
<div className='px-[32em]'>
<button className='outline outline-[0.4px] bg-white text-black mt-[5px] w-[150px]  mb-8  rounded-full 
h-[40px]'>Load More Reiew</button>
</div>

{/* last section */}
<h1 className='text-5xl font-extrabold text-center mb-9'>You Might Also Like</h1>

<div className=' flex flex-row justify-evenly'> 
{/* card1 */}
<div className='flex flex-col flex-start p-0 gap-[16px] w-[270px] h-[650px]'>
           <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
             <Image src="/prod/shirt1.png" alt="shirt1" width={180} height={180} 
             className=' position-absolute w-[190px] h-[180px] -mt-10'/>
            </div>
            
           <h1 className='font-bold text-center'>Polo with Contrast Trims</h1>
          
            <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Star.png" alt='4star' width={100} height={50} />
             4.0/5</p>
           <p className='flex flex-row gap-3'>
           <p className='text-2xl ml-11'>$212 <s className='text-gray-500'>$242</s></p>
           <p className=' bg-red-300 text-red-600 rounded-full w-[60px] text-[12px] text-center bg-opacity-25 mt-1 p-1'> 
                          -20% </p> </p>

             </div>

             <div className=' flex flex-row justify-evenly '>
          
</div>
{/* card 2 */}

<div className=' flex flex-col flex-start p-0 gap-[16px]  w-[270px] h-[650px] '>
            
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/prod/shirt2.png" alt="shirt2" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
                    <h1 className='font-bold text-center'>Gradient Graphic T-shirt</h1>
           
                          <p className='flex flex-row gap-2 px-12'> 
                  <Image src="/home/Three Half Star.png" alt='3half star' width={100} height={50} /> 3.5/5</p>
                  <p className='text-2xl flex flex-row justify-evenly ml-8'>$145  </p>

              </div>

{/* card 3 */}
          
           <div className='flex flex-col flex-start p-0 gap-[16px] w-[270px] h-[650px]'>
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/prod/shirt3.png" alt="shirt3" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
            <h1 className='font-bold text-center'>Polo with Tipping Details</h1>
           
             <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Half Star.png" alt='4half star' width={100} height={50} /> 4.5/5</p>
            <p className='text-2xl ml-11'>$180 </p>

              </div>
          
{/* card 4 */}

<div className=' flex flex-col flex-start p-0 gap-[16px]  w-[270px] h-[650px] '>
            
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/prod/shirt4.png" alt="Vertical Striped Shirt" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
                    <h1 className='font-bold text-center'>Black Striped T-shirt</h1>
           
                          <p className='flex flex-row gap-2 px-12'> 
                  <Image src="/home/Five Star.png" alt='five star' width={100} height={50} /> 5/5</p>
                  <p className='text-2xl flex flex-row justify-evenly ml-8'>$120  <s className='text-gray-400'> $150 </s> 
                  <p className=' bg-red-300 text-red-600 rounded-full w-[60px] text-[12px] text-center bg-opacity-25'> 
                          -30% </p> </p>

              </div>
</div>

</div>


  )
}

export default productdetail