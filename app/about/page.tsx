import styles from './page.module.css'
import Image from 'next/image'
import Artist from 'public/rorisang-01.jpg'

const ABOUT = () => {
  return (
    <div>
        <div className={styles.heading}>
          <h1>THE ARTIST</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <Image src={Artist} alt='artist' className= {styles.img} />
          </div>
          <div className={styles.item}>
            <h1 className='text-4xl'>
              My art is born out of the zeal for perfection both in skill, expression and devotion to create positive changes in the world. 
              I draw inspiration from life experiences and everything that sparks a feeling of necessity.
            </h1>
            <p className='text-lg flex items-center mt-8'>
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