import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validatedSchema = Yup.object({
  location: Yup.string().required("Lieu requis"),
  startDate: Yup.date().required("Date de départ requise"),
  endDate: Yup.date().required("Date d'arrivée requise"),
  numDays: Yup.number().required("Nombre de jours requis"),
  accommodation: Yup.string().required("Type d'hébergement requis"),
  numPeople: Yup.number().required("Nombre de personnes requis"),
  amenities: Yup.string().required("Commodités requises"),
});

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
};

const SearchForm = () => {
  return (
    <Formik
      initialValues={{
        location: "",
        startDate: "",
        endDate: "",
        accommodation: "",
        numPeople: "",
        amenities: "",
      }}
      validationSchema={validatedSchema}
      onSubmit={handleSubmit}
    >
      <Form className="search">
        <div className="search__one">
        <label htmlFor="location">Lieu :</label>
        <Field type="text" id="location" name="location" />
        <ErrorMessage name="location" component="div" />

        <label htmlFor="startDate">Date de départ :</label>
        <Field type="date" id="startDate" name="startDate" />
        <ErrorMessage name="startDate" component="div" />

        <label htmlFor="endDate">Date d'arrivée :</label>
        <Field type="date" id="endDate" name="endDate" />
        <ErrorMessage name="endDate" component="div" />
        </div>
        <div className="search__two">
        <label htmlFor="accommodation">Type d'hébergement :</label>
        <Field as="select" id="accommodation" name="accommodation">
          <option value="">--Choisissez un type--</option>
          <option value="hotel">Hôtel</option>
          <option value="bungalow">Bungalow</option>
          <option value="gite">Gîte</option>
        </Field>
        <ErrorMessage name="accommodation" component="div" />

        <label htmlFor="numPeople">Nombre de personnes :</label>
        <Field type="number" id="numPeople" name="numPeople" />
        <ErrorMessage name="numPeople" component="div" />

        <label htmlFor="amenities">Commodités :</label>
        <Field as="select" id="amenities" name="amenities">
          <option value="">--Choisissez une option--</option>
          <option value="pool">Piscine</option>
          <option value="spa">Spa</option>
          <option value="punchBar">Bar à punch</option>
        </Field>
        <ErrorMessage name="amenities" component="div" />
        </div>
        <button type="submit">Rechercher</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
