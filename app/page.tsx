'use client'


import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import Masonry from 'react-masonry-css'
import nodeFetch from 'node-fetch'

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
import { GetStaticProps } from 'next'
import { createApi } from 'unsplash-js'




type HomeProps ={
  images: {
    src: string
  }[]
};

export const getStaticProps: GetStaticProps<any> =async () => {
  
  const unsplash = createApi({
    accessKey: 'MY_ACCESS_KEY',
    fetch: nodeFetch as unknown as typeof fetch,
  });

  const images = [image01, image02, image03, image04]

  return Promise.resolve({
    props: {
      images,
    },
  })
}

export default function Home({images}: HomeProps) {

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
            {images.map((image, idx)=>(
              <Image
                key={image.src}
                src={images}
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
                dynamicEl={images.map((image) =>({
                  src: image.src,
                  thumb: image.src
                }))}
            />
      </div>
    </main>
  )
}
