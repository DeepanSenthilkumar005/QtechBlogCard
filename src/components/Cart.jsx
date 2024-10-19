import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

function Cart() {
  return (
    <>
    <div className="cartpage p-2 px-4 ">
        <div className="cartnav ">
            <span className='text-csbrown text-xl font-medium'>
           <button className='hover:scale-105 hover:cursor-pointer duration-100'> &larr; Cart </button>
            
            <br />
            
               <div className="font-semibold text-black"> Secure Checkout</div>
                <hr className='h-0.5 mt-1 mb-3 bg-csbrown border-none' />
            </span>
        </div>
            <span className='flex  font-semibold'><FaLocationDot className='text-csyellow text-lg mt-0.5'/> 
                            Delivery Address
                            </span>
                            
        {/* <div className="cartcontent grid grid-cols-3 gap-4 "> 
            <div className="delivery col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-3 order-first">
               

                <div className="deliverycontent rounded-md bg-csyellow col-span-1 p-2">
                    <FaLocationDot my-2/>
                    Lorem ipsum dolor sit amet consectetur adipisiditate aspernatur aut explicabo sed unde rem.
                </div>

                <div className="deliverycontent rounded-md bg-csyellow col-span-1 p-2">
                    <FaLocationDot my-2 />
                    Lorem ipsum dolor sit amet consectetur adipisiditate aspernatur aut explicabo sed unde rem.
                </div>
                
            </div>

            <div className="cartitem col-span-1 row-span-2 border border-slate-950 h-full order-last">
                saf
            </div>
        </div> */}
        <div className='flex '>
            <div className="leftcontentcart  md:w-3/5">
                <div className='deliveryaddress grid sm:grid-cols-1 md:grid-cols-2 md:gap-4'>
            <div className="deliverycontent rounded-md md:col-span-1 bg-csyellow m-1 sm:col-span-2 p-2">
                    <FaLocationDot my-2/>
                    Lorem ipsum dolor sit amet consectetur adipisiditate aspernatur aut explicabo sed unde rem.
                </div>
                <div className="deliverycontent rounded-md md:col-span-1 m-1 border-2 border-dotted border-csyellow sm:col-span-2 p-2">
                    <FaLocationDot className="my-2"/>
                    Lorem ipsum dolor sit amet consectetur adipisiditate aspernatur aut explicabo sed unde rem.
                </div>

            </div>
            {/* phone number for the cart */}
            
                <div className="phonecontent">
                <span className='flex  font-semibold'><FiPhone className='text-csyellow text-lg mt-0.5'/> 
                            Phone Number
                            </span>
                            
            
            {/* <div className='phonenumber grid sm:grid-cols-1 md:grid-cols-2 md:gap-4'> */}
            <div className='phonenumber flex '>

            <div className="phonenumbercontent w-fit  rounded-md md:col-span-1 bg-csyellow m-1 col-span-1 p-2 ">
                   <div className="flex">
                   <FiPhone className='mt-1 me-1'/> 
                   98776543210
                   </div>
                </div>
                <div className="w-fit my-auto phonenumbercontent rounded-md md:col-span-1 m-1 border-2 border-dotted border-csyellow col-span-1 p-2">
                    + Add Alternateive Number
                </div>

            </div>
                </div>

                {/* Types of Order for the cart */}
            
                <div className="ordercontent">
                <span className='flex  font-semibold'><FaLocationDot  className='text-csyellow text-lg mt-0.5'/> 
                            Type of Order
                            </span>
                           
            
            {/* <div className='phonenumber sm:grid md:flex sm:grid-cols-1 md:grid-cols-2 md:gap-4'> */}
            <div className='order flex'>

            <div className="ordercontent w-fit  rounded-md  bg-csyellow m-1  p-2 ">
                   <div className="flex">
                   <FiCalendar  className='mt-1 me-1'/> 
                   Subscription
                   </div>
                </div>
                <div className="w-fit my-auto phonenumbercontent rounded-md md:col-span-1 m-1 border-2 border-dotted border-csyellow col-span-1 p-2">
                <div className="flex">
                   <FiCalendar  className='mt-1 me-1'/> 
                   Schedule Order
                   </div>
                </div>

            </div>
                </div>
            

            </div>
            
            <div className='sm:hidden md:backdrop:flex'>

            </div>
        </div>

    </div>
    </>
  )
}

export default Cart