'use client'

import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-40 max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className={styles.newsletter}>
            <h2 className={styles.heading}>JOIN MY NEWSLETTER</h2>
            <form action="" className={styles.footerform}>
              <input type="email" name="email" id="" placeholder='Your Email Address' className={styles.email}/>
              <button type='submit' className={styles.btn}>SIGN UP</button>
            </form>
        </div>
        <div className={styles.socials}>
            <h2 className={styles.heading}>SOCIALS</h2>
            <ul className={styles.socialplatforms}>
              <Link href="/"><li>Instagram</li></Link>
              <Link href="/"><li>TikTok</li></Link>
              <Link href="/"><li>Facebook</li></Link>
              <Link href="/"><li>LinkedIn</li></Link>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer