'use client'

import {useState} from "react";
import styles from './page.module.css'
import '../globals.css'

import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { ToastContainer, toast } from "react-toastify";


type FormValues = {
  name: string;
  lastname: string;
  email: string;
  message: string;
};

export default function ContactForm () {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Form submitted successfully!");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", lastname:"", email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >

        <Form>
          <div className={styles.names}>
            <label htmlFor="name" className={styles.label}>Name
              <Field 
                type="text"
                required
                name="name"
                id="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </label>
            
            <label htmlFor="lastname" className={styles.label}>Last Name
              <Field 
                type="text"
                required
                name="lastname"
                id="lastname" 
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500"
              />
            </label>
            
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>Email
              <Field 
                type="email"
                required
                name="email"
                id="email" 
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </label>   
          </div>
          <div>
            <label htmlFor="message" className={styles.label}>Message
              <Field 
                required
                rows={4}
                name="message"
                id="message" 
                as="textarea"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />
            </label>  
          </div>
          <button type="submit" disabled={isLoading} className={styles.button}>SEND</button>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    
  );
};