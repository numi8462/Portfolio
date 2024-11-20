"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navItems } from '@/data'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll); 
    return () => { 
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);
  return (
    <nav className={`${ isScrolled ? 'bg-black-100 bg-opacity-100':''} ${ isOpen ? 'bg-black-100 bg-opacity-100':''} bg-opacity-0 text-white py-7 z-50 w-full fixed top-0 font-bold`}>
      <div className='flex justify-between items-center container h-10'>
        <Link href="/">
          <h1 className='text-2xl px-2 rounded-md hover:text-blue-100 hover:bg-mint-100'>
            YHK&apos;s Portfolio
          </h1>
        </Link>

        <div className={`md:hidden flex justify-center items-center ${isOpen ? "hidden":""} p-1`}>
          <button onClick={()=>{
            setIsOpen(!isOpen);
          }}>
            <GiHamburgerMenu size={30}/>
          </button>
        </div>

        <div className={`md:hidden flex justify-center items-center ${isOpen ? "":"hidden"}`}>
          <button onClick={()=>{
            setIsOpen(!isOpen);
          }}>
            <IoMdClose size={40}/>

          </button>
        </div>

        <ul className='flex justify-between gap-10 text-xl max-md:hidden'>
          {navItems.map((item) => (
              <li key={item.name} className='px-2 rounded-md hover:text-blue-100 hover:bg-mint-100'>
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
          ))}
        </ul>
      </div>
      <div className={`flex justify-center items-center bg-black-100 ${isOpen ? "":"hidden"} md:hidden mt-5`}>
        <ul className='flex flex-col text-xl'>
          {navItems.map((item) => (
              <li key={item.name} className='flex justify-center rounded-md hover:text-blue-100 hover:bg-mint-100 my-2 px-2'>
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
