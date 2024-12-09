import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

 const category = () => {
  return (
    <div className='xl:w-screen xl:h-full xl:grid xl:grid-cols-3 '>
    <Link href="/" >Home</Link> <Link href="/cart" >Cart</Link>
    
      <div className=' xl:w-[290px] sm:w-[290px] xl:h-[1030px] outline outline-1 xl:ml-10 sm:ml-2  mb-6 mt-16
'>  {/* fillter */}
<div className=' w-15 h-4 flex flex-row justify-between'> <h1 className='font-bold mt-2'>Filters</h1> 
  <div className='mt-2'><Image src="/prod/b1.png" alt="filter" width={20} height={20} /></div> </div>
 <hr className='mt-6'/>
 
 < div className='flex flex-col ml-1 gap-6'>
  <div className='flex justify-between px-5'><button>T-Shirt    </button> {`>`}</div>
  <div className='flex justify-between px-5'><button>Short    </button> {`>`}</div> 
 <div className='flex justify-between px-5'><button>Shirts   </button>  {`>`}</div>
 <div className='flex justify-between px-5'><button>Hoodie    </button> {`>`}</div>
 <div className='flex justify-between px-5'><button>Jeans   </button>{`>`}</div>
 </ div>
 <div className='mt-7'>
 <Image src="/filter/price.png" alt="price" width={280} height={30}/>
 </div>

 <h1 className='text-[19px] mt-4'> Color </h1>
 <div className='grid grid-cols-4 gap-2 px-3'>
   <div className='rounded-full bg-green-600 w-8 h-8 '><input type='checkbox' className='rounded-full ml-[10px] mt-[10px] outline-none'/> </div>
  <div className='rounded-full bg-red-600 w-8 h-8 '><input type='checkbox' className='rounded-full ml-[10px] mt-[10px] outline-none'/> </div>
  <div className='rounded-full bg-yellow-500 w-8 h-8 '><input type='checkbox' className='rounded-full ml-[10px] mt-[10px] outline-none'/> </div>
  <div className='rounded-full bg-orange-600 w-8 h-8 '><input type='checkbox' className='rounded-full ml-[10px] mt-[10px] outline-none'/> </div>
  <div className='rounded-full bg-blue-700 w-8 h-8 '><input type='checkbox' className='rounded-full ml-[10px] mt-[10px] outline-none'/> </div>
  <div className='rounded-full bg-purple-700 w-8 h-8 '><input type='checkbox' className='rounded-full ml-[10px] mt-[10px] outline-none'/> </div>
 </div>

<hr/>

          {/* size button */}
          <h1 className='font-400 text-[20px] line-height-[20px] text-black-400 py-2'> Choose Size : </h1>
          <div className='grid grid-cols-3 gap-4 py-2 '>
            <button className='hover:bg-black rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '>Small</button>
            <button className='  hover:bg-black rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '>Medium</button>
            <button className='hover:bg-black rounded-full   bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '>Lrage</button>
            <button className='hover:bg-black rounded-full    bg-gray-100 text-gray-400 text-center w-[86px] h-[46px] '> X-Lrage</button>
          </div>

          <hr className='w-[293px] mt-3'/>

<div>
  <h1 className='font-bold py-2 px-5'> Dress Style</h1>
  
 < div className='flex flex-col ml-1 mb-6 gap-6'>
  <div className='flex justify-between px-5'><button>Causal    </button> {`>`}</div>
  <div className='flex justify-between px-5'><button>Formal   </button> {`>`}</div> 
 <div className='flex justify-between px-5'><button>Party  </button>  {`>`}</div>
 <div className='flex justify-between px-5'><button>Gym   </button> {`>`}</div>
 </ div>


 <button className='outline oultine-1 bg-black text-white mt-[28px] 
 w-[260px] ml-5 mb-8 rounded-full 
h-[40px]'>Apply Filter</button>          </div>

</div>

{/* items  */}

<div className='grid grid-row gap-0 py-32 '>

<div>
<div className=' flex xl:flex-row sm:flex-col xl:gap-4 sm:gap-2 sm:ml-4'>
  {/* card 1 */}

<div className=' flex flex-col flex-start p-0 gap-[16px]  w-[270px] xl:h-[650px] sm:h-[450px]'>
            
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/prod/shirt2.png" alt="shirt2" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
                    <h1 className='font-bold text-center'>Gradient Graphic T-shirt</h1>
           
                          <p className='flex flex-row gap-2 px-12'> 
                  <Image src="/home/Three Half Star.png" alt='3half star' width={100} height={50} /> 3.5/5</p>
                  <p className='text-2xl flex flex-row justify-evenly ml-8'>$145  </p>

              </div>
{/* card 2 */}
          
<div className='flex flex-col flex-start p-0 gap-[16px] w-[270px] xl:h-[650px] sm:h-[450px]'>
            <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/prod/shirt3.png" alt="shirt3" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
             </div>
             
            <h1 className='font-bold text-center'>Polo with Tipping Details</h1>
           
             <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Half Star.png" alt='4half star' width={100} height={50} /> 4.5/5</p>
            <p className='text-2xl ml-11'>$180 </p>

              </div>


{/* card 3 */}

<div className=' flex flex-col flex-start p-0 gap-[16px]  w-[270px] xl:h-[650px] sm:h-[450px] '>
            
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

              {/* div2 */}
<div>
              <div className='flex xl:flex-row sm:flex-col sm:ml-4 gap-4'>
  
 {/* card 2 */}

          
 <div className=' flex flex-col flex-start p-0 gap-[16px]  w-[270px] xl:h-[650px] sm:h-[450px] '>
            
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

              <div className=' flex flex-col flex-start p-0 gap-[16px] w-[270px] xl:h-[650px] sm:h-[450px] '>
                
                <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
              <Image src="/home/p3.png" alt="checkered shirt" width={180} height={180} 
              className=' position-absolute w-[190px] h-[180px] -mt-10'/>
                </div>
             
                <h1 className='font-bold text-center '>Checkered Shirt</h1>
           
                  <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Half Star.png" alt='4half star' width={100} height={50} /> 4.5/5</p>
                        <p className='text-2xl ml-11'>$180 </p>

              </div>
             
             

{/* card 4 */}

          
              <div className=' flex flex-col flex-start p-0 gap-[16px]  w-[220px] xl:h-[650px] sm:h-[450px]'>
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
           
            {/* div3 */}
<div>                          
<div className='flex xl:flex-row sm:flex-col  gap-4 sm:ml-3 xl:w-44'>
             {/* card 1 */}

          
         <div className=' flex flex-col  p-0 gap-[16px]  w-[270px] xl:h-[650px] sm:h-[450px] '>
            
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
         
           <div className='flex flex-col flex-start p-0 gap-[16px] xl:w-[270px] xl:h-[650px] sm:h-[450px] xl:px-16'>
           <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
             <Image src="/home/p6.png" alt="graphic T-shirt" width={180} height={180} 
             className=' position-absolute w-[190px] h-[180px] -mt-10'/>
            </div>
            
           <h1 className='font-bold text-center'>Courage Graphic T-shirt </h1>
          
            <p className='flex flex-row gap-2 px-10'> <Image src="/home/Four Star.png" alt='4star' width={100} height={50} />
             4.0/5</p>
           <p className='text-2xl ml-11'>$180 </p>

             </div>
             <div className=' flex flex-row  justify-evenly '>
          
          {/* card3 */}
         
           <div className='flex flex-col flex-start p-0 gap-[16px] xl:w-[270px] xl:h-[650px] sm:h-[450px] 
                          xl:ml-40    sm:-ml-80'>
           <div className='w-[270px] h-[250px] px-10 py-20 outline-sm bg-gray-500 bg-opacity-[0.12] rounded-lg '>
             <Image src="/home/p7.png" alt="Loos Fit Bermuda Short" width={180} height={180} 
             className=' position-absolute w-[190px] h-[180px] -mt-10'/>
            </div>
            
           <h1 className='font-bold text-center'>Loos Fit Bermuda Short</h1>
          
            <p className='flex flex-row gap-2 px-10'> 
              <Image src="/home/Three Star.png" alt='three star' width={60} height={9} /> 3.0/5</p>
           <p className='text-2xl ml-11'>$80 </p>

             </div>
      </div>
      </div>
      </div>
      </div>
           </div>
        
 </div>



</div>



  )
}

export default category
