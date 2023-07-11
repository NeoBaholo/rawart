'use client'

import React from 'react'
import Link from 'next/link';
import styles from './navbar.module.css'

const links =[
    {
        id:1,
        title:"Artworks",
        url:"/artworks",
    },
    {
        id:2,
        title:"About",
        url:"/about",
    },
    {
        id:3,
        title:"Contact",
        url:"/contact",
    },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>RAWRISANG ART</Link>
        <div className={styles.links}>
            {links.map((link)=>(
                <Link key={link.id} href={link.url} className={styles.link} >
                    {link.title}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar