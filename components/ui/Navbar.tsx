"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navItems } from '@/data'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`${ isScrolled ? 'bg-black-100 ':'bg-opacity-0'}  text-white py-7 z-50 w-full fixed top-0 font-bold`}>
      <div className='flex justify-between container '>
        <Link href="/">
          <h1 className='text-2xl hover:text-purple'>
            Portfolio
          </h1>
        </Link>

        <ul className='flex justify-between gap-10 text-xl '>
          {navItems.map((item: any) => (
              <li key={item.name} className='hover:text-purple'>
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
