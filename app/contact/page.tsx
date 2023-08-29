'use client'

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from './ContactForm'




const contact = () => {

  

  return (
    <div>
      <div className='flex justify-center mt-12 mb-44 text-3xl font-extralight max-lg:text-lg max-lg:my-7 max-lg:mb-24 '>
        <h1>CONTACT</h1>
      </div>
      <div className='flex items-center justify-center flex-row gap-48 max-lg:flex-col max-lg:gap-20'>
        <div className='flex flex-col gap-y-5 items-center gap-5 font-extralight'>
          <h1 className='text-5xl font-light max-lg:text-4xl'>CONTACT US</h1>
          <p>info@rawrisangart.com</p>
          <p>Johannesburg, South Africa</p>
          <div className='flex items-center gap-2.5 opacity-70'>
            <Link href="https://www.instagram.com/rawrisang/"><Image src="/Instagram.png" alt='instagram icon' width={25} height={25}/></Link>
            <Link href="https://www.tiktok.com/@rawrisangart"><Image src="/tik-tok.png" alt='tiktok icon' width={25} height={25}/></Link>
            <Link href="https://www.facebook.com/rawrisang"><Image src="/facebook.png" alt='facebook icon' width={25} height={25}/></Link>
            <Link href="https://www.linkedin.com/in/rorisang-micheal-monanabela-62ab96138/"><Image src="/LinkedIn.png" alt='LinkedIn icon' width={25} height={25}/></Link>
          </div>
        </div>
        <div>
          <ContactForm/>
        </div>  
      </div>
    </div>
  )
}

export default contact