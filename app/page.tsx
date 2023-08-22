'use client'


import Image from 'next/image'

import './globals.css'
import Masonry from 'react-masonry-css'


import type { LightGallery } from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import LifeinAbundance from "public/web.images/Life in Abundance.jpg"
import TheInnerReality from "public/web.images/The Inner Reality.jpg"
import InnerReality02 from "public/web.images/Inner Reality 02.jpg"
import ThisLove from "public/web.images/This Love.jpg"
import ThisLove01 from "public/web.images/This Love 01.jpg"
import ThisLove02 from "public/web.images/This Love 02.jpg"
import TheGoldenPerspective from "public/web.images/The Golden Perspective.jpg"
import TheGoldenPerspective01 from "public/web.images/The Golden Perspective 01.jpg"
import TheGoldenPerspectiveSeries from "public/web.images/The Golden Perspective Series.jpg"
import LiveLaughLoveSeries from "public/web.images/Live Laugh Love Series.jpg"
import LiveLaughLoveSeries01 from "public/web.images/Live Laugh Love Series 01.jpg"
import LiveLaughLoveSeries02 from "public/web.images/Live Laugh Love Series 02.jpg"
import LiveLaughLoveSeries03 from "public/web.images/Live Laugh Love Series 03.jpg"
import LiveLaughLoveSeries04 from "public/web.images/Live Laugh Love Series 04.jpg"
import LiveLaughLoveSeries05 from "public/web.images/Live Laugh Love Series 05.jpg"
import LiveLaughLoveSeries06 from "public/web.images/Live Laugh Love Series 06.jpg"
import LiveLaughLoveSeries07 from "public/web.images/Live Laugh Love Series 07.jpg"
import LiveLaughLove from "public/web.images/Live Laugh Love.jpg"



import { useRef } from 'react'




const images = [LifeinAbundance, TheInnerReality, InnerReality02, ThisLove, ThisLove01, ThisLove02, TheGoldenPerspective, TheGoldenPerspective01, TheGoldenPerspectiveSeries, LiveLaughLoveSeries, LiveLaughLoveSeries01, LiveLaughLoveSeries02,
  LiveLaughLoveSeries03,LiveLaughLoveSeries04,LiveLaughLoveSeries05,LiveLaughLoveSeries06,LiveLaughLoveSeries07, LiveLaughLove,


];



export default function Home() {

  const lightboxRef = useRef<LightGallery | null>(null)

  console.log(images);

  return (
    <main className="h-full">
      <div className='w-full flex xl:flex-row flex-col justify-center max-container'>
        <h1 className= 'relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>GALLERY</h1>
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
                dynamicEl={images.map((image) =>({
                  src: image.src,
                  thumb: image.src,
                  
                }))}
            />
      </div>
    </main>
  )
}
