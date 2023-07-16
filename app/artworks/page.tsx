'use client'

import React, { useRef } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Artwork from 'public/web.images/image01.jpg'



const artworks = () => {



  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>SOUL PIECES</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.latestDesc}>
            <h1 className='text-4xl font-normal mb-10'>Abundance</h1>
            <p className={styles.para}>
              My art is born out of the zeal for perfection both in skill, expression and devotion to create positive changes in the world. 
              I draw inspiration from life experiences and everything that sparks a feeling of necessity.
            </p>
          </div>
          <div className={styles.latestImage}>
            <Image src={Artwork} alt='artwork' className= {styles.img}/>
          </div>
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image01.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image04.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image03.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image05.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image06.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image07.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image08.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image09.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image10.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image11.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image12.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image13.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image14.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image15.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image16.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image17.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image04.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image03.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image01.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image04.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image03.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image01.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image04.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image03.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
        <div className={styles.artworkgroup}>
          <div className={styles.artworkrow} >
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image01.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image04.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>
            <div>
              <Link href="/" className='flex items-center justify-center w-full'>
                <Image src='/web.images/image03.jpg' alt='abundance' width={500} height={100} />
              </Link>
            </div>                
          </div>
          <div className={styles.artworkrow}>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
            <p className='text-center mt-5 text-2xl font-extralight'>Live Love  Laugh <br /><b className='text-lg'>SOLD</b></p>
          </div>    
        </div>
      </div>   
    </div>
  )
}

export default artworks