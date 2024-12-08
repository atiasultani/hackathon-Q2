import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const productdetail = () => {
  return (

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
        <div className='flex justify-evenly flex-col ml-40  h-80 mt-24 gap-20'>
          <div className='
position-absolute
w-170px
h-170px'>
            <Image src="/prod/proS1.png" alt='p1' width={80} height={80} />
          </div>
          <div className='
position-absolute
w-170px
h-170px'>
            <Image src="/prod/proS2.png" alt='p2' width={80} height={80} />
          </div>
          <div className='
position-absolute
w-170px
h-170px'>
            <Image src="/prod/proS3.png" alt='joy-r3' width={90} height={90} />
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
        <div className='w-75 h-80 '>
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
            <h1 className=' flex felx-row py-5 font-400 text-[20px] gap-3'> Colours :

              <p className='w-6 h-6 rounded-full bg-blue-700 bg-opacity-35 
   outline-black outline-8  
  flex justify-center'>
                <input type='radio' name='color' value="colored" /></p>
              <p className='w-6 h-6 rounded-full bg-pink-600 bg-opacity-35 
   outline-black outline-8  
  flex justify-center'>
                <input type='radio' name='color' value="colored" /></p>
            </h1>
          </div>

          {/* size button */}
          <div className='flex flex-row gap-4 '>
            <h1 className='font-400 text-[20px] line-height-[20px]'>Size : </h1>
            <button className='rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] '>XS</button>
            <button className='rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] '>S</button>
            <button className='rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] '>M</button>
            <button className='rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] '>L</button>
            <button className='rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] '>XL</button>
          </div>
          <div className='flex justify-evenly w-[450px]'>
            {/* incress or degress btn with buy  & like btn */}
           <div className='flex text-center gap-7 py-8'>
              <button className='text-[18px]  font-thin  rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] '> - </button> 2 <button className='text-[18px]  font-thin rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] bg-red-600 text-white'> + </button>
            </div>
            {/* buy button */}
            <button className='outline oultine-1 bg-red-600 text-white mt-[28px] w-[160px]
h-[40px]
'> Buy Now </button>
            {/* like button */}
            <button className='outline oultine-0  outline-black mt-[29px] -ml-4
rounded-sm w-[38px] h-[38px] px-2 py-2'><Image src="/header2/like-icon.svg" alt="like-icon" width={30} height={30} /> </button>
          </div>

          {/* delivery note */}
        
              <div className='
                w-[428px]
                    flex 
                    flex-row
                    justify-center
                    position-absolute
                    py-10
                    gap-6
                    outline outline-1 '>
               <Image src="/productDetail/icon-delivery.png" alt='delvery-icon' width={36} height={36} />
           
              <div>
              <h1 className='font-bold'>Free Delivery</h1>
              <p className='underline'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            {/* return note */}
            <div className='
                         w-[428px]
                            flex 
                            flex-row
                            justify-center
                            position-absolute;
                            py-10
                            gap-6
                            outline outline-1 '>
              
                <Image src="/productDetail/icon-return.png" alt='return-icon' width={36} height={36} />
                <div>
                <h1>Return Delivery</h1>
                <p>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
                </div>
              </div>
            </div>
          </div>

{/* realted items */}
<div className=' flex flex-row justify-evenly '> 

{/* card1 */}
<div className='
flex
flex-col
flex-start
p-0
gap-[16px]

w-[270px]
h-[650px]


'>
  <div className='w-[270px]
h-[250px]
px-10
py-20
outline-sm
bg-slate-50 '>
  <Image src="/productDetail/red-joy.png" alt="red-joy" width={180} height={180} className='
position-absolute
w-[190px]
h-[180px] -mt-10'/>
  <div className='
bg-red-500
text-white
rounded-sm
text-center
position-relative
w-[55px]
h-[26px]
py-1
-mt-52
-ml-4
'>-40%</div>
  <div className='bg-white rounded-full w-[36px] h-[36px] flex justify-center ml-44 -mt-6'>
    <Image src="/header2/like-icon.svg" alt="like-icon" width={24} height={24} /> 
    </div>
        
  </div>
  <h1 className='font-bold'>HAVIT HV-G92 Gamepad</h1>
  <p className='text-red-600'>$120 <span className='text-gray-300 '><s>  $160 </s></span></p>
  <p className='flex flex-row gap-5 text-gray-300'>
  <Image src="/productDetail/Five Star.png" alt='joy-r4' width={100} height={50} /> (88) </p>
  <button className='bg-black text-white'>ADD TO CART</button>

</div>
{/* card 2 */}

<div className='
flex
flex-col
flex-start
p-0
gap-[16px]

w-[270px]
h-[650px]


'>
  <div className='w-[270px]
h-[250px]
px-10
py-20
outline-sm
bg-slate-50 '>
  <Image src="/productDetail/keyboard.png" alt="keyboard" width={180} height={180} className='
position-absolute
w-[190px]
h-[180px] -mt-10'/>
  <div className='
bg-red-500
text-white
rounded-sm
text-center
position-relative
w-[55px]
h-[26px]
py-1
-mt-52
-ml-4
'>-35%</div>
  <div className='bg-white rounded-full w-[36px] h-[36px] flex justify-center ml-44 -mt-6'>
    <Image src="/header2/like-icon.svg" alt="like-icon" width={24} height={24} /> 
    </div>
        
  </div>
  <h1 className='font-bold'>AK-900 Wired Keyboard</h1>
  <p className='text-red-600'>$960 <span className='text-gray-300 '> <s> $1160 </s></span></p>
  <p className='flex flex-row gap-5 text-gray-300'>
  <Image src="/productDetail/Four Star.png" alt='four star' width={100} height={50} /> (75) </p>
  <button className='bg-black text-white'>ADD TO CART</button>

</div>

{/* card 3 */}

<div className='
flex
flex-col
flex-start
p-0
gap-[16px]

w-[270px]
h-[650px]


'>
  <div className='w-[270px]
h-[250px]
px-10
py-20
outline-sm
bg-slate-50 '>
  <Image src="/productDetail/LCD.png" alt="LCD" width={180} height={180} className='
position-absolute
w-[190px]
h-[180px] -mt-10'/>
  <div className='
bg-red-500
text-white
rounded-sm
text-center
position-relative
w-[55px]
h-[26px]
py-1
-mt-52
-ml-4
'>-30%</div>
  <div className='bg-white rounded-full w-[36px] h-[36px] flex justify-center ml-44 -mt-6'>
    <Image src="/header2/like-icon.svg" alt="like-icon" width={24} height={24} /> 
    </div>
        
  </div>
  <h1 className='font-bold'>IPS LCD Gaming Monitor</h1>
  <p className='text-red-600'>$370 <span className='text-gray-300 '><s>$400</s></span></p>
  <p className='flex flex-row gap-5 text-gray-300'>
  <Image src="/productDetail/Five Star.png" alt='LCD' width={100} height={50} /> (99) </p>
  <button className='bg-black text-white'>ADD TO CART</button>

</div>

{/* card 4 */}

<div className='
flex
flex-col
flex-start
p-0
gap-[16px]

w-[270px]
h-[650px]


'>
  <div className='w-[270px]
h-[250px]
px-10
py-20
outline-sm
bg-slate-50 '>
  <Image src="/productDetail/speaker.png" alt="speaker" width={180} height={180} className='
position-absolute
w-[190px]
h-[180px] -mt-10'/>
  <div className='
bg-red-500
text-white
rounded-sm
text-center
position-relative
w-[55px]
h-[26px]
py-1
-mt-52
-ml-4
'>-40%</div>
  <div className='bg-white rounded-full w-[36px] h-[36px] flex justify-center ml-44 -mt-6'>
    <Image src="/header2/like-icon.svg" alt="like-icon" width={24} height={24} /> 
    </div>
        
  </div>
  <h1 className='font-bold'>RGB liquid CPU Cooler</h1>
  <p className='text-red-600'>$180 <span className='text-gray-300 '><s> $170 </s></span></p>
  <p className='flex flex-row gap-5 text-gray-300'>
  <Image src="/productDetail/Four Half Star.png" alt='four half star' width={100} height={50} /> (65) </p>
  <button className='bg-black text-white'>ADD TO CART</button>

</div>
{/*  */}


</div>



        </div>



  )
}

export default productdetail