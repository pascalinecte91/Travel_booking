
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
        usertName: "",
        password: "",
        email: "",
      }}
      validatedSchema={validatedSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="firstName">Nom d'utilisateur :</label>
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="firstName" component="div" />


        <label htmlFor="email">Email :</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Mot de passe :</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button className="login" type="submit">Soumettre</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
