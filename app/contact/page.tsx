import React from 'react'
import styles from './page.module.css'

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>CONTACT</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className='text-5xl font-light'>CONTACT US</h1>
          <p>info@rawrisangart.com</p>
          <p>Johannesburg, South Africa</p>
          <div>Instagram</div>
        </div>
        <div>
          <form action="">
            <div className={styles.names}>
              <label htmlFor="name">First Name
                <input type="text" name='First Name' id='name' required />
              </label>
              <label htmlFor="last name">Last Name
                <input type="text" name='Last Name' id='last name' required />
              </label>
            </div>
            <label htmlFor="">Email
            <input type="email"  />
            </label>
            <label htmlFor="">Message
              <textarea name="message" id="message"></textarea>
            </label>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default contact