'use client'

import { useState } from 'react';
import React from 'react'
import Link from 'next/link';
import {navLinks} from '../../constants'
import hamburger from '../../public/hamburger.svg';
import Image from 'next/image';


const Navbar = () => {
    return (
    <header className=' padding-x py-8 sticky z-10 flex flex-col justify-between item-align w-full'>
        <nav className='flex items-center w-full'>    
          <Link href="/" className='text-3xl font-bold text-black'>RAWRISANG ART</Link>
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
          <div className='flex-1 hidden max-lg:block'>
            <Image src={hamburger} alt='hamburger icon' width={25} height={25} className='flex' />
          </div> 
        </nav>
    </header>
    
    
  )
}

export default Navbar