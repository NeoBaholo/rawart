'use client'

import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { validationSchema } from "@/utils/validations";
import {useState} from "react";

const Footer = () => {
  
  
  return (
    <footer className='mt-40 mb-20 w-full'>
      <div className='flex justify-between items-start gap-14 flex-wrap max-lg:flex-col max-lg:w-full'>
        <div className='flex flex-col items-center justify-center gap-2.5'>
            <h2 className='font-extralight text-xl max-lg:text-lg'>JOIN MY NEWSLETTER</h2>
            <Formik
              initialValues={{ name: "", lastname:"", email: "", message: "" }}
              validationSchema={toFormikValidationSchema(validationSchema)}
              
            >
              <Form action="" className='flex flex-row items-start gap-3 max-lg:gap-3'>
                <div className='block'>
                  <Field 
                    type="email"
                    required
                    name="email"
                    id="email"
                    className='sm:w-96 pl-2 text-sm max-lg:w-60'
                    placeholder='Enter Your Email'
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-3"
                  />
                </div>
                <div className='max-lg: flex max-lg:items-end'>
                  <button type='submit' className='text-white rounded-md h-11 w-24  opacity-50 bg-stone-400'>SIGN UP</button>
                </div>
              
              </Form>
            </Formik>
            
        </div>
        <div className='flex flex-col items-center justify-center gap-2.5 max-lg:container'>
          <h2 className='font-extralight text-xl max-lg:text-lg'>SOCIALS</h2>
          <ul className='flex justify-between items-center font-extralight text-xl gap-6 text-black max-lg:container max-lg:text-sm max-lg:flex max-lg:justify-center '>
            <Link href="/"><li>Instagram</li></Link>
            <Link href="/"><li>TikTok</li></Link>
            <Link href="/"><li>Facebook</li></Link>
            <Link href="/"><li>LinkedIn</li></Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer