import React,{useState} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [count,setCount]=useState(1);
    const [showcart,setShowcart]=useState(false)
    const navigate = useNavigate();
  return (
    <>
    <div className="cartpage p-2 px-4 ">
        <div className="cartnav ">
            <span className='text-csbrown text-xl font-medium'>
           <button onClick={()=>{
            navigate(-1)
           }} className='hover:scale-105 hover:cursor-pointer duration-100'> <span className="font-extrabold">
            
            &larr;</span> Cart </button>
            
            <br />
            
               <div className="font-semibold text-black"> Secure Checkout</div>
                <hr className='h-0.5 mt-1 mb-3 bg-csbrown border-none' />
            </span>
            <span className='sm:block md:hidden'>
            <button onClick={()=>{
                    
           }} className='hover:scale-105 hover:cursor-pointer duration-100'>  Cart </button>
            </span>

        </div>
            <span className='flex  font-semibold'><FaLocationDot className='text-csyellow text-lg mt-0.5'/> 
                            Delivery Address
                            </span>
                            
        
        <div className='flex '>
            <div className="leftcontentcart m-2  md:w-3/5">
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
            
                <div className="phonecontent m-1">
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
                <div className="w-fit my-auto ordercontent rounded-md m-1 border-2 border-dotted border-csyellow  p-2">
                <div className="flex">
                   <FiCalendar  className='mt-1 me-1'/> 
                   Schedule Order
                   </div>
                </div>

            </div>
                </div>
            

            </div>
            
            <div className='rightcontentcart sm:hidden p-3 ms-3 w-2/5 h-[70vh] flex-col md:flex  md:col-span-2 border-2 border-slate-600'>
                <div className="carthead flex justify-between m-1">
                    <p className='font-semibold'>
                        Cart
                    </p>
                    <p className='font-semibold'>
                        Items
                    </p>
                </div>
                <div className="cartcheck flex justify-between border-2 border-slate-600 p-2 text-sm w-3/4">
                    <div className="cartchecknumber ">
                        5279875
                    </div>
                    <div className="cartcheckcheck text-csbrown font-bold">
                        Check
                    </div>
                </div>
                <div className="cartitems block">
                    <div className="cartitem">
                        <div className="cartitemname">
                            Egg
                        </div>
                        <div className="cartitemlist px-2  ">
                        <div className='flex w-full'>
                        <div className="cartitemsubname me-auto">
                            Country Egg
                        </div>
                        <div className="cartitemcount font-bold text-lg ms-auto">
                            <button className='mx-5' onClick={() => count > 1 && setCount(count - 1)}>
                                -
                            </button>
                            {count}
                            <button className='mx-5' onClick={() => setCount(count + 1)}>
                                +
                            </button>
                        </div>
                        </div>
                        <div className="cartitemamount ms-2 text-csbrown font-bold text-lg ">
                        ₹{200*count}
                        </div>
                        
                        </div>

                    </div>
                    <div className="cartitem">
                        <div className="cartitemname">
                            Egg
                        </div>
                        <div className="cartitemlist px-2  ">
                        <div className='flex w-full'>
                        <div className="cartitemsubname me-auto">
                            Country Egg
                        </div>
                        <div className="cartitemcount font-bold text-lg ms-auto">
                            <button className='mx-5' onClick={() => count > 1 && setCount(count - 1)}>
                                -
                            </button>
                            {count}
                            <button className='mx-5' onClick={() => setCount(count + 1)}>
                                +
                            </button>
                        </div>
                        </div>
                        <div className="cartitemamount ms-2 text-csbrown font-bold text-lg ">
                        ₹{200*count}
                        </div>
                        
                        </div>

                    </div>
                    <div className="pricedetail">

                    </div>
                   
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Cart