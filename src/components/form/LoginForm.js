
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from 'react-router-dom';

const validatedSchema = Yup.object({
  userName: Yup.string().required('nom  d\' utilisateur requis'),
  password: Yup.string().min(6, "Le mot de passe doit comporter au moins 6 caractères").required("Mot de passe requis"),
  email: Yup.string().email("Format email invalide").required("Email requis"),
});

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
};

const LoginForm = () => {
  return (
    
    <Formik
      initialValues={{
        userName: "",
        password: "",
        email: "",
      }}
      validatedSchema={validatedSchema}
      onSubmit={handleSubmit}
    >
      <Form className="loginForm">
        <label htmlFor="firstName">Nom d'utilisateur :</label>
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="firstName" component="div" />


        <label htmlFor="email">Email :</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Mot de passe :</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <NavLink to="/forgottenPasswordPage" className="editMP">Mot de passe oublié </NavLink>
        <button className="login" type="submit">Soumettre</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
