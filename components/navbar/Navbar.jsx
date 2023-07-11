'use client'

import React from 'react'
import Link from 'next/link'


const links = [
    
    {
        id: 1,
        title: "Artworks",
        url: "/artworks",
    },
    {
        id: 1,
        title: "About",
        url: "/about",
    },
    {
        id: 1,
        title: "Contact",
        url: "/contact",
    },
];

function Navbar() {
    return (
        <div>
            <Link href="/">Rawrisang</Link>
            <div>
                {links.map(link => (
                    <Link key={link.id} href={link.url}> {link.title} </Link>
                ))}
            </div>
        </div>

    );
}

export default Navbar