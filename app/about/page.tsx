import styles from './page.module.css'
import Image from 'next/image'
import Artist from 'public/rorisang-01.jpg'

const ABOUT = () => {
  return (
    <div>
        <div className='flex justify-center mt-12 mb-44 text-3xl font-extralight max-lg:text-lg max-lg:my-7 '>
          <h1>THE ARTIST</h1>
        </div>
        <div className='flex gap-24 m-5 mt-20 max-lg:flex-col max-lg:gap-12'>
          <div className='flex-1 flex flex-col gap-5'>
            <Image src={Artist} alt='artist' className= 'w-full h-auto object-cover'/>
          </div>
          <div className='flex-1 flex flex-col gap-5 max-lg:gap-7'>
            <h1 className='text-4xl max-lg:text-xl'>
              My art is born out of the zeal for perfection both in skill, expression and devotion to create positive changes in the world. 
              I draw inspiration from life experiences and everything that sparks a feeling of necessity.
            </h1>
            <p className='text-2xl flex items-center font-light max-lg:text-base'>
            Rorisang Michael Monanabela (b.1995) in Eastern Cape, is currently studying Ar- chitecture at the University of Witwatersrand and graduated from Walter Sisulu University with a Bcom Accounting in 2018. 
            At an age as early as five, Rorisang’s grandmother exposed him to numbers. 
            Nonetheless, his favorite part was using pencils to draw stickmen during his mathematics lessons. 
            In 2014 He was admitted at Walter Sisulu University to study Bachelor of Accounting Science. 
            However, in 2017 He lost his Bursary and due to His poor background He taught himself how to draw professionally to finance his studies. 
            Since then He had always been enthu- siastic about drawing realistic portraits on paper and drawing from his imagination.
            Rorisang’s source of inspiration comes from His social environment, highlighting pressing matters both in his community and world- wide, matters including poverty, lack of opportunities, mental health and others. 
            
            </p>
          </div>
        </div>
        
    </div>
  )
}

export default ABOUT