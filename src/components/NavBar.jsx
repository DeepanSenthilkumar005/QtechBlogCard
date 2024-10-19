import { useState,useEffect  } from "react";
import '../components/NavBar.css'
import nbi from '../assets/bgnav.png'
import { RiHomeLine } from "react-icons/ri";
import { TbEggs } from "react-icons/tb";
import { LiaBlogger } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { GoHeart  } from "react-icons/go";
import { LuShoppingBag  } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";
function NavBar() {
  const [toggle,setToggle]=useState(false);

  const handleResize = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setToggle(false);
    } 
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <section className='bg-white sticky top-0 w-full z-50'>
      <nav className="topcontent flex justify-center bg-slate-300 p-1">
      <BiSolidOffer className='my-auto text-csyellow me-2'/>
      Buy 2 get 1 Free
      <button className='rounded-lg my-auto text-csbrown  border mx-2 hover:scale-105 duration-200'>
        Shop Now
      </button>
      </nav>
      <div className="midabove">
        <nav className="font-inter md:flex  md:items-center ">
        <div className="brand flex m2">
          
          <img src={nbi} alt="" className="h-8 ms-1" />
          <a href="#" className="m-1 text-csyellow ">Eggspro</a>
           <span className='md:hidden flex ms-auto m-2'>
          <button onClick={()=>{setToggle(!toggle)}}><RxHamburgerMenu className='' /></button>
          </span>
      </div>
     
      <div className="hidecontent midcontent sm:hidden w-full md:justify-between md:flex">

          <div className="leftsidecontent m-2 ">
       
        
        <ul className=" first-line: md:flex md:items-center text-slate-600">
          <li className="mx-4 hover:text-csbrown hover:cursor-pointer hover:scale-105 duration-150">
            <i className='flex'><RiHomeLine className='my-auto'/>
            <Link to="/" className="text-xl" >Home</Link></i></li>
          <li className="mx-4 hover:text-csbrown hover:cursor-pointer hover:scale-105 duration-150">
            <i  className='flex'><TbEggs  className='my-auto' />
            <Link to="/products" className="text-xl">Products</Link></i></li>
          <li className="mx-4 hover:text-csbrown hover:cursor-pointer hover:scale-105 duration-150">
            <i className='flex'><LiaBlogger  className='my-auto' />
            <Link to="/blog" className="text-xl">Blog</Link></i></li>
            <li className="mx-4 hover:text-csbrown hover:cursor-pointer hover:scale-105 duration-150">
            <i  className='flex'><FiPhone  className='my-auto' />
            <Link to="/contact" className="text-xl">Contact Us</Link></i></li>
        </ul>
        </div>
        <div className="rightsidecontent">
        <ul className="my-3 md:flex md:items-center text-slate-600">
          <li className="mx-4 hover:text-csbrown hover:cursor-pointer hover:scale-105 duration-150">
            
            <Link to="/profile" className="text-xl"><i className='flex'><FiUser className='my-auto'/></i></Link></li>
          <li className="mx-4 hover:text-csbrown hover:cursor-pointer hover:scale-105 duration-150">
            <Link to="/liked" className="text-xl"> <i  className='flex'><GoHeart   className='my-auto' /></i></Link>
           </li>
          <li className="mx-4 hover:text-csbrown hover:cursor-pointer hover:scale-105 duration-150">
            
            <Link to="/cart" className="text-xl"><i className='flex'><LuShoppingBag   className='my-auto' /></i></Link></li>
            </ul>
        </div>
      </div>
  </nav>
      <div className="asidebar">
        
  {toggle && (
        
        <div className="smcontent  flex showcontent bg-green-400 ">
            <div className="content h-full bg-white shadow-lg ms-auto fixed z-50 right-0 w-2/4 p-2 ">
            <span className="block text-lg ms-1 mt-1"><button onClick={()=>{
              setToggle(!toggle)
            }}><SlClose className="mt-0"/></button></span>
              <ul className="ms-auto  inline-block">
                <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
                  <i className="flex">
                  <RiHomeLine className='my-auto me-2'/>
                  <Link to="/" className="text-xl " >Home</Link>
                      </i>
                      </li>
                <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
                  <i className="flex">
                  <TbEggs  className='my-auto me-2' />
                    <Link to="/products" className="text-xl">
                      Products
                      </Link>
                      </i>
                      </li>
                <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
                  <i className="flex">
                  <GoHeart   className='my-auto me-2' />
                    <Link to="/liked" className="text-xl">
                      Wishlist
                      </Link>
                      </i>
                      </li>
                <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
                  <i className="flex">
                  <LiaBlogger  className='my-auto me-2' />
                  <Link to="/blog" className="text-xl">Blog</Link>
                      </i>
                      </li>
                <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
                  <i className="flex">
                  <FiPhone  className='my-auto me-2' />
                    <Link to="/contact" className="text-xl">
                      Contact Us
                      </Link>
                      </i>
                      </li>
                <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
                  <i className="flex">
                  <LuShoppingBag   className='my-auto me-2' />
                    <Link to="/cart" className="text-xl">
                      Cart
                      </Link>
                      </i>
                      </li>
                <li className="mx-4 hover:text-slate-800 hover:cursor-pointer hover:scale-105 duration-150">
                  <i className="flex">
                  <IoIosLogOut className='my-auto me-2' />
                    <Link to="/logout" className="text-xl">
                      Logout
                      </Link>
                      </i>
                      </li>
              </ul>
            </div>
          
          
      </div>
      )
      }
      </div>
      </div>
      
    </section>
  );
  
}

export default NavBar