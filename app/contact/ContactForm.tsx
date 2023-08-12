'use client'

import {useState} from "react";
import styles from './page.module.css'
import '../globals.css'

export default function ContactForm () {
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      lastname: String(event.target.lastname.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      //reset the form
      event.target.name.value = "";
      event.target.lastname.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.names}>
        <label htmlFor="name" className={styles.label}>Name
          <input 
            type="text"
            required
            name="name"
            id="name"
          />
        </label>
        
        <label htmlFor="lastname" className={styles.label}>Last Name
          <input 
            type="text"
            required
            name="lastname"
            id="lastname" 
          />
        </label>
        
      </div>
      <div>
        <label htmlFor="email" className={styles.label}>Email
          <input 
            type="email"
            required
            name="email"
            id="email" 
          />
        </label>   
      </div>
      <div>
        <label htmlFor="message" className={styles.label}>Message
          <textarea 
            required
            rows={4}
            name="message"
            id="message" 
          />
        </label>  
      </div>
      <button type="submit" disabled={loading} className={styles.button}>SEND</button>
    </form>
  )
}