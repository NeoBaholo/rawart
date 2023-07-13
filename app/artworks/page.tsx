import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const artworks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>SOUL PIECES</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.artworkgroup}>
          <Link href="/"><Image src='/web.images/image01.jpg' alt='abundance' width={100} height={100} /></Link>
        </div>
      </div>
      
    </div>
  )
}

export default artworks