'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { ChakraProvider } from '@chakra-ui/react'


const poppins = Poppins({ 
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rawrisang Art',
  description: 'Golden Perspective',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        <ChakraProvider>{children}</ChakraProvider>
        </body>
        <Footer/>
    </html>
  )
}
