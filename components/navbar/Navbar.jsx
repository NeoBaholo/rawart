'use client'

import { useState } from 'react';
import React from 'react'
import Link from 'next/link';
import {navLinks} from '../../constants'
import hamburger from '../../public/hamburger.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
        setMenuOpen(!menuOpen)
  }
  
  return (
    <header className=' padding-x py-8 sticky z-10 flex flex-col justify-between item-align w-full'>
        <nav className='max-w-[1440px] flex justify-between items-center sm: py-4'>    
          <Link href="/" className='text-3xl font-bold text-black max-lg:text-xl'>RAWRISANG ART</Link>
          <ul className='flex-1 flex justify-end items-center gap-10 max-lg:hidden'>
                {navLinks.map((item) => (
                <li key={item.label}>
                    <Link
                    href={item.href}
                    className='leading-normal text-lg text-black font-extralight'
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
          </ul>    
          <div className='items-end hidden max-lg:block'>
            <Image src={hamburger} alt='hamburger icon' width={25} height={25} onClick={handleMenu} className='cursor-pointer' />
             
          </div> 
          <div className={
            menuOpen ? '-right-px top-0 w-[67%] h-fit absolute bg-[#ffffff] ease-in duration-500 flex flex-col justify-start z-50': 'hidden'
          }>
            <div className="flex absolute top-6 right-6 w-full justify-end items-center">
                <AiOutlineClose onClick={handleMenu} className="text-2xl text-black mb-4 opacity-70 cursor-pointer" />
            </div>
            <ul className="flex flex-col justify-center items-center mt-20 font-extralight ">
                <li className="text-2xl text-black mb-4">
                    <Link href="/artworks"> ARTWORKS</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/about"> ABOUT</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/contact"> CONTACT</Link>
                </li>     
            </ul>
          </div>

        </nav>
    </header>
    
    
  )
}

export default Navbar