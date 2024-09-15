import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot be more than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(7, "Must be at least 7 digits")
    .required("Number is required"),
});

const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: "", number: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    {() => (
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          <span>Name</span>
        </label>
        <Field
          className={css.input}
          name="name"
          type="text"
          placeholder="Введіть ім'я"
        />
        <ErrorMessage className={css.error} name="name" component="div" />

        <label className={css.label} htmlFor="number">
          <span>Number</span>
        </label>
        <Field
          className={css.input}
          name="number"
          type="text"
          placeholder="Введіть номер телефону"
        />
        <ErrorMessage className={css.error} name="number" component="div" />

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    )}
  </Formik>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
