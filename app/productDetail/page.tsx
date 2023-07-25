

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Artwork from 'public/web.images/image01.jpg'


const productDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>ARTWORK</h1>
      </div>
      <div className={styles.content}>
            <div className={styles.artwork}>
                <Image src={Artwork} alt='placeholder' className={styles.img}/>
            </div>
            <div className={styles.info}>
                <h2 className='text-4xl font-normal mb-10'>Abundance</h2>
                <p className={styles.para}>Charcoal and graphite on paper.
                   Size (150x180cm)
                </p>
                <Link href="/contact"><button className={styles.btn}>Inquire</button></Link>
            </div> 
      </div>
    </div>
  )
}

export default productDetail
