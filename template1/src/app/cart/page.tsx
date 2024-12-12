import React from "react";
import Image from "next/image";
const cart = () => {
  return (
    <div>
      
      <h1 className=" text-3xl font-extrabold px-10 mt-5">YOUR CART</h1>
      
      <div className="flex flex-row">
      
      {/* items add */}

      <div
        className="

flex
flex-col
py-[20px] 
position-absolute
w-[715px]
h-[608px]
ml-[50px]
my-8
top-[276px]
outline outline-gray-500 outline-1 rounded-xl "
      >
        <div className="flex flex-col">
          {/* card1 */}
          <div className=" w-auto h-auto">
            <Image
              src="/prod/shirt2.png"
              alt="shirt2"
              width={180}
              height={180}
              className=" position-absolute w-[95px] h-[95px]  mt-10 ml-7"
            />

            <h1 className="font-bold  -mt-20 ml-36">
            Gradient Graphic T-shirt
            </h1>

            <div className="mt-2 ml-36">
              <p className="text-sm">
                {" "}
                <b>Size :</b> Large
              </p>
              <p className="text-sm">
                {" "}
                <b>Color:</b> White
              </p>
            </div>

            <p className="text-xl  ml-36 font-bold">$145 </p>
            {/*bin button  */}
            <button className="flex ml-[40em] -mt-[7em]">
              <Image
                src="/cart/bin-icon.png"
                alt="bin"
                width={24}
                height={24}
                className=" position-absolute"
              />
            </button>

            {/* incress or degress btn with buy  & like btn */}
            <div
              className="flex text-center gap-7 mt-12 ml-[36em] xl:w-170 sm:w-[100px] h-8   
            bg-slate-400 rounded-full"
            >
              <button className="text-[18px] font-thin outline outline-1 rounded-sm bg-slate-400 text-center rounded-s-full w-[32px] h-[32px] ">
                {" "}
                -{" "}
              </button>
              <span className=" bg-slate-400 text-black">1</span>{" "}
              <button className="text-[18px]  font-thin rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] bg-gray-400 text-black rounded-e-full">
                {" "}
                +{" "}
              </button>
            </div>

            <hr className="text-red-900 mt-10 ml-3" />
          </div>

          {/* card2 */}
          <div className=" w-auto h-auto">
            <Image
              src="/home/p3.png"
              alt="check-shirt"
              width={180}
              height={180}
              className=" position-absolute w-[95px] h-[95px]  mt-10 ml-7"
            />

            <h1 className="font-bold  -mt-20 ml-36">
            CHECKERED SHIRT
            </h1>

            <div className="mt-2 ml-36">
              <p className="text-sm">
                {" "}
                <b>Size :</b> Mediun
              </p>
              <p className="text-sm">
                {" "}
                <b>Color:</b> Red
              </p>
            </div>

            <p className="text-xl  ml-36 font-bold">$180 </p>
            {/*bin button  */}
            <button className="flex ml-[40em] -mt-[7em]">
              <Image
                src="/cart/bin-icon.png"
                alt="bin"
                width={24}
                height={24}
                className=" position-absolute"
              />
            </button>

            {/* incress or degress btn with buy  & like btn */}
            <div
              className="flex text-center gap-7 mt-12 ml-[36em] xl:w-170 sm:w-[100px] h-8   
bg-slate-400 rounded-full"
            >
              <button className="text-[18px] font-thin outline outline-1 rounded-sm bg-slate-400 text-center rounded-s-full w-[32px] h-[32px] ">
                {" "}
                -{" "}
              </button>
              <span className=" bg-slate-400 text-black">1</span>{" "}
              <button className="text-[18px]  font-thin rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] bg-gray-400 text-black rounded-e-full">
                {" "}
                +{" "}
              </button>
            </div>

            <hr className="text-red-900 mt-10 ml-3" />
          </div>

          {/* card3 */}
          <div className=" w-auto h-auto">
            <Image
              src="/home/p2.png"
              alt="jeans"
              width={180}
              height={180}
              className=" position-absolute w-[95px] h-[95px]  mt-10 ml-7"
            />

            <h1 className="font-bold  -mt-20 ml-36">
            SKINNY FIT JEANS
            </h1>

            <div className="mt-2 ml-36">
              <p className="text-sm">
                {" "}
                <b>Size :</b> Large
              </p>
              <p className="text-sm">
                {" "}
                <b>Color:</b> blue
              </p>
            </div>

            <p className="text-xl  ml-36 font-bold">$240 </p>
            {/*bin button  */}
            <button className="flex ml-[40em] -mt-[7em]">
              <Image
                src="/cart/bin-icon.png"
                alt="bin"
                width={24}
                height={24}
                className=" position-absolute"
              />
            </button>

            {/* incress or degress btn with buy  & like btn */}
            <div
              className="flex text-center gap-7 mt-12 ml-[36em] xl:w-170 sm:w-[100px] h-8   
bg-slate-400 rounded-full"
            >
              <button className="text-[18px] font-thin outline outline-1 rounded-sm bg-slate-400 text-center rounded-s-full w-[32px] h-[32px] ">
                {" "}
                -{" "}
              </button>
              <span className=" bg-slate-400 text-black">1</span>{" "}
              <button className="text-[18px]  font-thin rounded-sm outline outline-1 outline-black text-center w-[32px] h-[32px] bg-gray-400 text-black rounded-e-full">
                {" "}
                +{" "}
              </button>
            </div>

            <hr className="text-red-900 mt-10 ml-3" />
          </div>
        </div>
      </div>

      {/*  items details */}
      <div
        className="outline outline-gray-500 outline-1 
     
     
     rounded-xl   mx-12   my-8  pr-5">
        <h1 className="font-bold text-xl px-11 py-5"> Order Summary</h1>
        <p className="ml-14">
          {" "}
          Subtotal<span className="ml-[16em]">$565</span>
        </p>
        <p className="ml-14">
          {" "}
          Discount (-20%)<span className="ml-[12.3em] text-red-600">-$113</span>
        </p>
        
        <p className="ml-14">
          {" "}
          Delivery Fee<span className="ml-[13.8em] text-red-600">-$113</span>
        </p>
        
        <hr className="mt-10" />
        <p className="mt-7 ml-14">
          {" "}
          Total<span className=" ml-[17.5em]">$467</span>
        </p>
        


        <div className="flex flex-row">
        {/* coupon button  */}
         
         <div className="flex flex-row  mt-12 "> 
          <Image src="/cart/coupon.png" alt="cop-icon" width={20} height={20} className="ml-5 mr-3"/> 
          <input type="text" placeholder="Add promo code"  
          className="bg-slate-100 rounded-full  text-black py-1 px-3"/>  
          </div>


        {/* apply */}
        <button
          className="outline oultine-1 bg-black text-white 
               xl:w-[120px] sm:w-[106px]  rounded-full h-[40px]  mt-12 ml-2.5"
        >
          Apply
        </button>
        
        </div>
        
        {/* Add to the cart button */}
        <button
          className="outline oultine-1 bg-black text-white 
              xl:mt-[28px] xl:w-[360px] sm:w-[126px] xl:ml-5 sm:-ml-3 mb-8 rounded-full 
h-[40px]"
        >
          Go To Checkout 
        </button>{" "}
      </div>
      </div>
    </div>
  );
};

export default cart;
