'use client'

import { useState } from 'react';
import React from 'react'
import Link from 'next/link';
import {navLinks} from '../../constants'
import hamburger from '../../public/hamburger.svg';
import Image from 'next/image';


const Navbar = () => {
    return (
    <header className=' padding-x py-8 absolute z-10 flex justify-between w-auto'>
        <nav className='grid grid-cols-2 justify-between'>    
          <Link href="/" className='text-3xl font-bold text-black'>RAWRISANG ART</Link>
          <ul className='flex-1 flex justify-end items-center gap-10 max-lg:hidden'>
                {navLinks.map((item) => (
                <li key={item.label}>
                    <Link
                    href={item.href}
                    className='leading-normal text-lg text-slate-gray'
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
          </ul>    
          <div className='hidden max-lg:block'>
            <Image src={hamburger} alt='hamburger icon' width={25} height={25} />
          </div> 
        </nav>
    </header>
    
    
  )
}

export default Navbar