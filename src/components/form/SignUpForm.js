import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validatedSchema = Yup.object({
  userName: Yup.string().required("Nom utilisateur requis"),
  lastName: Yup.string().required("Nom requis"),
  firstName: Yup.string().required("Prénom requis"),
  password: Yup.string()
    .min(6, "Le mot de passe doit comporter au moins 6 caractères")
    .required("Mot de passe requis"),
  email: Yup.string().email("Format email invalide").required("Email requis"),
  address: Yup.string().required("Adresse requise"),
  city: Yup.string().required("Ville requise"),
  codePostal: Yup.number().required("Code postal requis"),
  phoneNumber: Yup.string().required("Numéro de téléphone requis"),
  age: Yup.number()
    .min(18, "Vous devez avoir au moins 18 ans")
    .required("Âge requis"),
});

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
};

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        age: "",
      }}
      validatedSchema={validatedSchema}
      onSubmit={handleSubmit}
    >
      <Form className="signUp">
        <label htmlFor="username">Nom d'utilisateur :</label>
        <Field type="text" id="username" name="userName" />
        <ErrorMessage name="userName" component="div" />

        <label htmlFor="firstName">Prénom :</label>
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="firstName" component="div" />

        <label htmlFor="lastName">Nom :</label>
        <Field type="text" id="lastName" name="lastName" />
        <ErrorMessage name="lastName" component="div" />

        <label htmlFor="email">Email :</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Mot de passe :</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <label htmlFor="address">Adresse :</label>
        <Field type="text" id="address" name="address" />
        <ErrorMessage name="address" component="div" />

        <label htmlFor="city">Ville :</label>
        <Field type="text" id="city" name="city" />
        <ErrorMessage name="city" component="div" />

        <label htmlFor="postalCode">Code Postal :</label>
        <Field type="text" id="postalCode" name="postalCode" />
        <ErrorMessage name="postalCode" component="div" />

        <label htmlFor="phoneNumber">Numéro de téléphone :</label>
        <Field type="text" id="phoneNumber" name="phoneNumber" />
        <ErrorMessage name="phoneNumber" component="div" />

        <label htmlFor="age">Âge :</label>
        <Field type="text" id="age" name="age" />
        <ErrorMessage name="age" component="div" />

        <button type="submit">Soumettre</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
