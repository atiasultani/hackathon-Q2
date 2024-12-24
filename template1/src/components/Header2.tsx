import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header2 = () => {
  return (
<div className='pt-[110px]
flex 
flex-auto
items-center
max-w:screen max-h:auto  md:w-screen lg:w-screen xl:w-screen    
'>
        
    {/* logo & routs */}
    <h1 className=' ml-[32px]  font-extrabold text-2xl  flex'> SHOP.CO </h1>
    <div className='flex justify-evenly  items-center px-2 text-[12px] gap-7  '>
    <ul className="hidden md:flex gap-10  list-none mr-16  md:gap-3 md:px-3">
    <li><Link className='hover:underline hover:underline-offset-4' href="/shop"> Shop </Link></li>
    <li><Link className='hover:underline hover:underline-offset-4' href="/on-sale"> On Sale </Link></li>
    <li><Link className='hover:underline hover:underline-offset-4 ' href="/new-arrivals">New Arrivals </Link></li>
    <li><Link className='hover:underline hover:underline-offset-4' href="/brands"> Brands </Link></li>
    <li><Link className='hover:underline hover:underline-offset-4' href="/productdetail"> Product Detail </Link></li>
    <li><Link className='hover:underline hover:underline-offset-4' href="/category"> Category </Link></li>
    </ul>
    </div>
    
    <Sheet>
        <SheetTrigger className="md:hidden">
              <Menu />
        </SheetTrigger>
        <SheetContent className="w-26">
          <ul className="flex flex-col gap-1 list-none px-3">
<li>  <Link className='px-4 hover:underline hover:underline-offset-4' href="/shop"> Shop </Link> </li>
<li>  <Link className='xl:mr-4 hover:underline hover:underline-offset-4' href="/on-sale"> On Sale </Link></li>
<li>  <Link className='px-4 hover:underline hover:underline-offset-4 sm:-ml-4' href="/new-arrivals">New Arrivals </Link></li>
<li>  <Link className='mr-16 hover:underline hover:underline-offset-4' href="/brands"> Brands </Link></li>
<li>  <Link className='mr-16 hover:underline hover:underline-offset-4' href="/productdetail"> Product Detail </Link></li>
<li>  <Link className='mr-16 hover:underline hover:underline-offset-4' href="/category"> Category </Link></li>
       </ul>
        </SheetContent>
      </Sheet>




    {/* search & cart container */}
    <div className='
flex        
flex-row
items-center
ml-10 md:-ml-5
px-24 
gap-[24px] 
outlin
outline-1
outline-black
rounded-3xl
bg-slate-200
w-[247px] md:w-[247px]  
h-[38px]
 '>
    <div className='
flex
flex-row
w-[111px]  
h-[24px]
'>
  <Image src="/header2/search-icon.svg" alt='search bar' 
    width={20} height={20} className='-ml-[85px] mr-3' />
    
  <input type='search' placeholder='Search for Product...' size={20}
  className='bg-gray-200 bg-opacity-40   '/>
    
    </div>

    <Image src="/header2/cart-icon.svg" alt='search bar' width={20} height={20}
    className='ml-[90px] sm:ml-[40px]'/>
    <Image src="/header2/dp-icon.png" alt='search bar' width={20} height={20}/>
    </div>
</div>
  )
}

export default Header2
