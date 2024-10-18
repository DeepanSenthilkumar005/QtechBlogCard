// import { useState } from "react";
import nbi from '../assets/navBrandIcon.jpg'
import { RiHomeLine } from "react-icons/ri";
import { TbEggs } from "react-icons/tb";
import { LiaBlogger } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
function NavBar() {
 

  return (
    <section className='bg-cyan-500'>
      <nav className="font-inter md:flex md:items-center justify-between">
        <div className="leftsidecontent flex m-2">
        <div className="brand flex ">
            <img src={nbi} alt="" className="h-8" />
            <a href="#" className="m-1 text-yellow-300">Eggspro</a>
        </div>
        <ul className="md:flex md:items-center text-slate-600">
          <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
            <i className='flex'><RiHomeLine className='my-auto'/>
            <a href="" className="text-xl">Home</a></i></li>
          <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
            <i  className='flex'><TbEggs  className='my-auto' />
            <a href="" className="text-xl">Products</a></i></li>
          <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
            <i className='flex'><LiaBlogger  className='my-auto' />
            <a href="" className="text-xl">Blog</a></i></li>
            <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
            <i  className='flex'><FiPhone  className='my-auto' />
            <a href="" className="text-xl">Contact Us</a></i></li>
        </ul>
        </div>
        <div className="rightsidecontent">
        <ul className="md:flex md:items-center text-slate-600">
          <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
            
            <a href="" className="text-xl"><i className='flex'><GoPerson className='my-auto'/></i></a></li>
          <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
            <a href="" className="text-xl"> <i  className='flex'><IoMdHeartEmpty  className='my-auto' /></i></a>
           </li>
          <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
            
            <a href="" className="text-xl"><i className='flex'><FiShoppingBag  className='my-auto' /></i></a></li>
            </ul>
        </div>
        
      </nav>
    </section>
  );
  
}

export default NavBar