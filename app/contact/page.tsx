'use client'

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from './ContactForm'




const contact = () => {

  

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>CONTACT</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className='text-5xl font-light'>CONTACT US</h1>
          <p>info@rawrisangart.com</p>
          <p>Johannesburg, South Africa</p>
          <div className={styles.icons}>
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