'use client'

import React, { useState } from 'react'
import styles from './page.module.css'


export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
    
        const data = {
          name: String (event.target.name.value),
          email: String (event.target.email.value),
          message: String (event.target.message.value),
        };

        const response = await fetch ("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            console.log("Message sent successfully");
            setLoading(false)
            //reset the form
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.message.value = "";
        }
        if (!response.ok) {
            console.log("Error sending message");
            setLoading(false)
        }
    }

      

    return (
        <form action="" onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.names}>
              <label htmlFor="name">First Name
                <input type="text" name='First Name' id='name' required />
              </label>
              <label htmlFor="last name">Last Name
                <input type="text" name='Last Name' id='last name' required />
              </label>
            </div>
            <label htmlFor="email" className={styles.label}>Email
            <input type="email" id='email'  />
            </label>
            <label htmlFor="message" className={styles.label}>Message
              <textarea name="message" id="message" className={styles.message}></textarea>
            </label>
            <button type='submit' disabled={loading} className={styles.button}>SEND</button>
          </form>
    )
}