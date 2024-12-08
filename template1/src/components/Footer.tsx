import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=' 
  position-absolute;
 flex
 justify-center
md:w-screen   sm:w-auto        
md:h-[440px]    sm:h-auto
                  sm:py-8
left-[0px]
top-[1703px]


bg-slate-500 bg-opacity-25
text-black
'>

{ /* sub container */}
<div className='  
md:flex      sm:grid 
md:flex-row   sm:grid-flow-col
md:justify-center
flex-start
p-0
gap-[87px]             
md:pt-[7em]  sm:pt-7    

position-absolute       
md:w-[1170px]   sm:w-screen
md:h-[236px]    sm:h-full  
md:left-[135px]            sm: ml-20 
top-[80px]              
'>

{/*frame1 open*/}
<div className=' 
 flex
 flex-col
 items-start
 md:p-0 sm:pb-6
 gap-[16px]

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
gap-[24px]

md:w-[168px]    sm:w-[30px]
h-[50px]

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
gap-[24px] 

w-[175px]
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
gap-[24px]   
md:w-[123px]    sm:w-[50px]
md:h-[236px]    sm:h-[90px]
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
gap-[16px]      

 md:w-[109px]    sm:w-[40]
 md:h-[144px]    sm:h-[50]
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
flex
flex-col
flex-start
p-0   
gap-[24px]

md:w-[198px]      sm:w-[50px]
md:h-[162px]     sm:h-[60px]
'>
  <div className='
flex
flex-col
flex-start;
p-0                 
md:gap-[15px]          sm:gap-2

md:w-[198px]      sm:w-[50px]
md:h-[110px]     sm:h-[60px]
'>
    <h1 className='font-bold'> Resources</h1>
    <p className='text-[12.8px]'>Free eBooks</p>

<p>Development Tutorial</p>

<p>How to - Blog</p>

<p>Youtube Playlist</p>
  </div>
  </div>
  <div className='
flex
flex-row
p-0       
gap-[24px]
mt-6
-ml-16
md:w-[168px]    sm:w-[30px]
h-[50px] w-`

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
