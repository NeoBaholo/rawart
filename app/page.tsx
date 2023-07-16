'use client'


import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import Masonry from 'react-masonry-css'

import type { LightGallery } from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import image01 from "public/web.images/image01.jpg"
import image02 from "public/web.images/image02.jpg"
import image03 from "public/web.images/image03.jpg"
import image04 from "public/web.images/image04.jpg"
import { useRef } from 'react'


const image = [image01, image02, image03, image04]

export default function Home() {

  const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <main className="h-full">
      <div className='flex justify-center font-extralight'>
        <h1 className="heading">GALLERY</h1>
      </div>
      <div className='image-gallery'>
          <Masonry 
            breakpointCols={2} 
            className='flex gap-4' 
            columnClassName=''
          >
            {image.map((image, idx)=>(
              <Image
                key={image.src}
                src={image}
                alt='placeholder'
                className='my-4 hover:opacity-60 cursor-pointer'
                placeholder='blur'
                onClick={() => {
                  lightboxRef.current?.openGallery(idx)
                }}
              />
            ))}
          </Masonry>
          <LightGalleryComponent
                onInit={(ref)=> {
                  if (ref) {
                    lightboxRef.current =ref.instance
                  }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={image.map((image) =>({
                  src: image.src,
                  thumb: image.src
                }))}
            />
      </div>
    </main>
  )
}
