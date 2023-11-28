import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const validatedSchema = Yup.object ({
name: Yup.string().required('nom requis'),
email: Yup.string().required('email requis'),
message: Yup.string().required('message requis'),
isRegistered: Yup.boolean(),
});

const handleSubmit = (values, {setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
};

const ContactForm = () => {
  return (

   <Formik
   initialValues={{
    name: "",
    email: "",
    message: "",
    isRegistered: false,
   }}
   validatedSchema={validatedSchema}
   onSubmit={handleSubmit}
   >

<Form className='formContact'>
        <label htmlFor="name">Nom :</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="email">Email :</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="message">Message :</label>
        <Field as="textarea" id="message" name="message" />
        <ErrorMessage name="message" component="div" />

        <label>
          <Field type="checkbox" name="isRegistered" />
          Déjà inscrit
        </label>

        <button type="submit">Envoyer</button>
      </Form>

   </Formik>
  )
}

export default ContactForm