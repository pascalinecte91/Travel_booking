import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

/**
 * Schéma de validation pour le formulaire de contact utilisant Yup.
 * Définit les règles de validation pour chaque champ du formulaire.
 */
const validationSchema = Yup.object({
  name: Yup.string().required('Nom requis'),
  email: Yup.string().email('Email invalide').required('Email requis'),
  message: Yup.string().required('Message requis'),
  isRegistered: Yup.boolean(),
});

/**
 * Gère la soumission du formulaire.
 * Affiche une alerte et réinitialise le formulaire après la soumission.
 * @param {object} values - Les valeurs du formulaire.
 * @param {object} actions - Les actions de Formik.
 */
const handleSubmit = (values, { setSubmitting, resetForm }) => {
  console.log(values);
  resetForm();   // Réinitialise le formulaire immédiatement
  
  window.setTimeout(() => { // setTimeout pour déclencher l'alerte après un court délai
    alert("Votre message a été transmis !  Nous vous répondrons au plus vite !");
  }, 100); // Délai de 100 millisecondes
  setSubmitting(false);
};

/**
 * Composant ContactForm pour le formulaire de contact.
 * Utilise Formik pour la gestion du formulaire et Yup pour la validation.
 * @returns {React.Component} Le composant ContactForm.
 */
const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "", isRegistered: false }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
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

          <button type="submit" disabled={isSubmitting}>
            Envoyer
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
