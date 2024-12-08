import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header2 = () => {
  return (
<div className='
flex
flex-row
items-center
position-absolute
w-[1170px] sm:w-auto
h-[55px]     
left-125
top-88
'>
        
    {/* logo & routs */}
    <h1 className='ml-40  font-extrabold text-2xl
      sm:ml-2 sm:grid 
    '> SHOP.CO </h1>
    <div className='flex justify-between px-4 text-[12px]
                      sm:flex flex-col 
                      '>
    <Link className='px-4 hover:underline hover:underline-offset-4' href="/shop"> Shop </Link>
    <Link className='hover:underline hover:underline-offset-4' href="/on-sale"> On Sale </Link>
    <Link className='px-4 hover:underline hover:underline-offset-4 sm:-ml-4' href="/new-arrivals">New Arrivals </Link>
    <Link className='mr-16 hover:underline hover:underline-offset-4' href="/brands"> Brands </Link>
    <Link className='mr-16 hover:underline hover:underline-offset-4' href="/productdetail"> Product Detail </Link>
    <Link className='mr-16 hover:underline hover:underline-offset-4' href="/category"> Category </Link>

    </div>

    {/* search & cart container */}
    <div className='
flex        
flex-row
items-center
p-0
-ml-11
px-24
gap-[24px]
outlin
outline-1
outline-black
rounded-3xl
bg-slate-200

w-[347px]  sm:w-[247px]
h-[38px]
'>
    <div className='
flex
flex-row
w-[211px]
h-[24px]
'>
  <Image src="/header2/search-icon.svg" alt='search bar' 
    width={20} height={20} className='-ml-[85px] mr-3' />
    
  <input type='search' placeholder='Search for Product...' size={22}
  className='bg-gray-200 bg-opacity-40 pr-6 sm:pr-1 -ml-15 sm:-ml-3'/>
    
    </div>

    <Image src="/header2/cart-icon.svg" alt='search bar' width={20} height={20}
    className='ml-[90px] sm:ml-[40px]'/>
    <Image src="/header2/dp-icon.png" alt='search bar' width={20} height={20}/>
    </div>
</div>
  )
}

export default Header2
