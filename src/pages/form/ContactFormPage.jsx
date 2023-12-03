import React from 'react'
import ContactForm from 'components/form/ContactForm.js'
import ContactMap from 'components/map/contactMap.js'


const ContactFormPage = () => {
  return (
    <>
       <h1 className='contact--title'>Nous contacter ! choisissez sur la map</h1>
    <section className='contact'>
   

    <ContactForm />
 <ContactMap />
   

    </section>
    </>
  )
}

export default ContactFormPage