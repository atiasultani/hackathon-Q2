import React from 'react'
import Image from 'next/image'


const Header1 = () => {
  return (
    <div className='
    position-absolute
lg:w-screen sm:w-screen

py-[16px]

 bg-black text-white'>
      
      { /* start up */}
<div className='

justify-between 
flex 
flex-row 
px-[400px]

'>
  <div className='

lg:flex       sm:grid
lg:flex-row   sm:grid-flow-col

gap-[31px]

position-absolute
w-[859px]    
h-[24px]        
top-[2px]

'>
<p className='lg:text-16 sm:text-3'>Sign up and get 20% off to your first order.</p>
<p className='underline'>ShopNow</p>
</div>

<p>X</p>
  </div>     

      </div>
     
  )
}

export default Header1
