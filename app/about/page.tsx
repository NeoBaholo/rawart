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
            <h1 className='text-6xl'>Rawrisang</h1>
            <p className='text-lg flex items-center'>My art is born out of the zeal for perfection both in skill, 
              expression and devotion to create positive changes in the world. 
              I draw inspiration from life experiences and everything that sparks a feeling of necessity.
            </p>
          </div>
        </div>
        
    </div>
  )
}

export default ABOUT