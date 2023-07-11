import styles from './page.module.css'
import Image from 'next/image'
import Artist from 'public/rorisang-01.jpg'

const ABOUT = () => {
  return (
    <div className='flex items-center'>
      <div>
        <Image src={Artist} alt='artist'/>
      </div>
      <div>
        <h1>Rorisang</h1>
        <p>I am an Artist</p>
      </div>
    </div>
  )
}

export default ABOUT