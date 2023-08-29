

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Artwork from '../../public/web.images/Life in Abundance.jpg'


const productDetail = () => {
  return (
    <div>
      <div className='flex justify-center my-12 font-extralight text-3xl'>
        <h1>ARTWORK</h1>
      </div>
      <div className='flex flex-row justify-between gap-5 my-5 mb-44 max-lg:flex-col max-lg:w-full'>
            <div className='flex flex-col gap-5 items-center justify-center flex-1 max-lg:mb-6'>
                <Image src={Artwork} alt='placeholder' className='w-full h-auto object-cover'/>
            </div>
            <div className='flex flex-col gap-5 items-center justify-center flex-1'>
                <h2 className='text-4xl font-normal mb-10 max-lg:text-2xl max-lg:mb-2.5'>Abundance</h2>
                <p className='flex justify-center items-center text-xl font-extralight max-lg:text-center'>Charcoal and graphite on paper.
                   Size (150x180cm)
                </p>
                <Link href="/contact"><button className='text-white w-72 rounded-md opacity-50 bg-stone-400 font-medium mt-10 ml-5 max-lg:ml-0'>Inquire</button></Link>
            </div> 
      </div>
    </div>
  )
}

export default productDetail
