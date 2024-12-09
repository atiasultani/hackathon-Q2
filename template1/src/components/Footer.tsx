import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=' 
  position-absolute;
 flex           sm:flex
 justify-center 
md:w-screen     sm:w-auto        
md:h-[440px]    sm:h-auto
                  sm:py-8
left-[0px]
top-[1703px]


bg-slate-500 bg-opacity-25
text-black
'>

{ /* sub container */}
<div className='  
xl:flex      sm:grid
xl:flex-row  sm grid-cols-3
              sm:grid-rows-3
xl:justify-center sm:justify-center
flex-start
p-0
xl:gap-[87px]   sm:gap-5         
xl:pt-[7em]  sm:pt-1    

position-absolute       
xl:w-[1170px]   sm:w-screen
xl:h-[236px]    sm:h-full 
xl:left-[135px] sm: ml-10 
top-[80px]              
'>

{/*frame1 open*/}
<div className=' 
 flex
 flex-col
 items-start
 md:p-0 sm:pb-2
 gap-[16px]   
xl:-mt-12
w-[217px]
h-[188px]
'>
{/*text-frame1 open tag*/} 
<h1 className='font-extrabold text-2xl '>SHOP.CO </h1>
<h3>We have clothes that suits your style and <br/>which you are proud to wear.<br/> From women to men.</h3>
<div className='
flex
flex-row
flex-start
p-0
pt-2        
xl:gap-[24px]

xl:w-[168px]    sm:w-[20px]
xl:h-[50px]

'>
  <Image src="/footer/1.png" alt='twitter' width={26} height={26}/>
  <Image src="/footer/2.png" alt='facebook' width={26} height={26}/>
  <Image src="/footer/3.png" alt='instagram' width={26} height={26}/>
  <Image src="/footer/4.png" alt='linkedIn' width={26} height={26}/>

</div>
</div>
{/* frame2 open*/}
<div className=' 
flex
flex-col
flex-start
p-0                   
xl:gap-[24px] sm:ml-3  sm:gap-3
xl:-mt-12
xl:mr-4
w-[175px] sm:w-4
h-{180px}
'>
  <h1 className='font-bold'> Company</h1>
  <p>About</p>
  <p>Features</p>
  <p>Career</p>
</div>

{/* frame3 open*/}
<div className='
flex
flex-col
flex-start
p-0
xl:-mt-12
xl:gap-[22px]    sm:gap-2
xl:w-[123px]    sm:w-[50px]
xl:h-[236px]    sm:h-[90px]
'>
<h1 className='font-bold'>Help</h1>
<p>Customer Support</p>
<p>Delivery Details</p>
<p>Terms & Conditions</p>
<p>Privacy Policy</p>

</div>

{/* frame4 open*/}
<div className='
flex
flex-col
flex-start
p:0            
xl:gap-[16px]      sm:-mt-16
xl:-mt-12
xl:w-[109px]    sm:w-[40]
 xl:h-[144px]    sm:h-[50]
'>
<h1 className='font-bold'>FAQ</h1>
<p>Account</p>
<p>Manage Deliveries</p>
<p>Orders</p>
<p>Payments</p>

</div>
{/* frame4 close*/}
{/* frame5 open*/}
<div>
  <div className='
xl:flex        sm:grid
xl:flex-col    sm: grid-cols
flex-start
p-0   
gap-[24px]

xl:w-[198px]     sm:w-[50px]
x;:h-[162px]     sm:h-[60px]
'>
  <div className='
flex  
flex-col  
flex-start;
p-0                 
gap-[15px]    sm:-mt-16      

w-[198px]     sm:w-[50px]
h-[110px]     sm:h-[60px]
'>
    <h1 className='font-bold'> Resources</h1>
    <p className='text-[12.8px]'>Free eBooks</p>

<p>Development Tutorial</p>

<p>How to - Blog</p>

<p>Youtube Playlist</p>
  </div>
  </div>
  <div className='
xl:flex
xl:flex-row
p-0       
xl:gap-[24px]
xl:mt-48            sm:mt-48
xl:-ml-16
xl:w-[168px]       sm:w-[35px]
xl:h-[50px]        sm:h-[20px]

'>
  <Image src="/footer/Badge.png" alt='vs1' width={42} height={2}/>
  <Image src="/footer/Badge(1).png" alt='vs2' width={42} height={2}/>
  <Image src="/footer/Badge(2).png" alt='vas3' width={42} height={2}/>
  <Image src="/footer/Badge(3).png" alt='vas4' width={42} height={2}/>

</div>

</div>
{/* frame5 close*/}

{/*sub-main*/}</div>
      
    {/*main*/}</div> 
  )
}

export default Footer
