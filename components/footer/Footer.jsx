
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
          <div>
            <h3>JOIN MY NEWSLETTER</h3>
            <form action="">
              <input type="text" placeholder='Your Email Address' />
              <button type='submit'>SIGN UP</button>
            </form>
          </div>
          <div>
            <h3>SOCIALS</h3>
            <ul>
              <li><Link href="./">Instagram</Link></li>
              <li><Link href="./">TikTok</Link></li> 
              <li><Link href="./">LinkedIn</Link></li>
            </ul>
          </div>
        </footer>
  )
}

export default Footer