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
            {/* <span className='sm:block md:hidden'>
            <button onClick={()=>{
                    
           }} className='hover:scale-105 hover:cursor-pointer duration-100'>  Cart </button>
            </span> */}

        </div>
           
                            
        
        <div className='sm:block md:flex '>
            <div className="leftcontentcart m-2 sm:w-full sm:block  md:w-4/6">
                <div className='deliveryaddress '>
                <span className='flex  font-semibold'><FaLocationDot className='text-csyellow text-lg mt-0.5'/> 
                            Delivery Address
                            </span>
            <div className="sm:block md:flex">
            <div className="deliverycontent rounded-md  bg-csyellow m-1 p-2">
                    <FaLocationDot className="me-1 inline"/>
                    <p className='inline'>Lorem ipsum dolor sit amet consectetur adipisiditate aspernatur aut explicabo sed unde rem.</p>
                </div>
                <div className="deliverycontent rounded-md m-1 border-2 border-dotted border-csyellow p-2">
                    <FaLocationDot className="me-1 inline"/>
                    <p className="inline">
                    Lorem ipsum dolor sit amet consectetur adipisiditate aspernatur aut explicabo sed unde rem.
                    </p>
                </div>
            </div>

            </div>
            {/* phone number for the cart */}
            
                <div className="phonecontent m-1">
                <span className='flex  font-semibold'><FiPhone className='text-csyellow text-lg mt-0.5'/> 
                            Phone Number
                            </span>
                            
            
            {/* <div className='phonenumber grid sm:grid-cols-1 md:grid-cols-2 md:gap-4'> */}
            <div className='phonenumber flex '>

            <div className="phonenumbercontent flex w-fit sm:my-1 rounded-md  bg-csyellow m-1 p-2 ">
                   
                   <FiPhone className='mt-1 me-1 flex'/> 
                   98776543210
                   
                </div>
                <div className=" sm:my-1 mx-2 w-fit my-auto phonenumbercontent rounded-md md:col-span-1 m-1 border-2 border-dotted border-csyellow p-2">
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

            <div className=" ordercontent w-fit flex rounded-md bg-csyellow m-1  p-2 ">
                   
                   <FiCalendar  className='mt-1 me-1'/> 
                   Subscription
                   
                </div>
                <div className="w-fit  sm:col-span-1  sm:mx-1 my-auto ordercontent rounded-md m-1 border-2 border-dotted border-csyellow  p-2">
                <div className="flex mx-2">
                   <FiCalendar  className='mt-1 me-1'/> 
                   Schedule Order
                   </div>
                </div>

            </div>
                </div>
            

            </div>
            
            <div className='rightcontentcart sm:w-4/5 md:w-2/6 sm:mx-auto sm:mt-5 h-fit sm:flex p-3 ms-3  flex-col md:flex  md:col-span-2 border-2 border-slate-600'>
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
                        <div className="cartitemamount ms-2  font-bold text-lg ">
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
                        <div className="cartitemamount ms-2 font-bold text-lg ">
                        ₹{200*count}
                        </div>
                        
                        </div>

                    </div>
                    <div className="pricedetail">

                    </div>
                   
                </div>
                <div className="priceheading">
                    <p className='font-semibold'>Price Details (2 items)</p>
                <p className='text-[red] text-md font-semibold'> Monthly + 3 days/Week plan + 8:30 Delivery time</p>
                </div>
                <div className="pricedetail  w-full">
                    <div className="totalmrp flex w-full justify-between">
                        <p>Total MRP</p>
                        <p>₹600</p>
                    </div>
                    <div className="discount flex w-full justify-between">
                        <p>Discount on MRP</p>
                        <p>₹99</p>
                    </div>
                    <div className="platformfee flex w-full justify-between">
                        <p>Platform Fee</p>
                        <p className='text-green-600 font-semibold'>FREE</p>
                    </div>
                    <div className="shippingfee flex w-full justify-between">
                        <p>Shipping Fee</p>
                        <p className='text-green-600 font-semibold'>FREE</p>
                    </div>
                    <div className="subtotal font-bold mt-1 flex w-full justify-between">
                        <p>Subtotal </p>
                        <p>₹501</p>
                    </div>
                    <div className="checkout font-bold mt-1 flex w-full justify-center">
                        <button className='bg-csbrown text-white w-full py-2 mx-3 hover:scale-95 duration-150 rounded-md'>
                            Checkout
                        </button>
                    </div>

                </div>
                
            </div>
        </div>

    </div>
    </>
  )
}

export default Cart