import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { ref } from "yup";

const Register = () => {
  const RadioOptions = [
    { key: "Email", value: "email" },
    { key: "Telephone", value: "telephone" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Format").required("Required !"),
    password: Yup.string().required("Required !"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password Must Match")
      .required("Required !"),
    modeOfContact: Yup.string().required("Required !"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephone",
      then: Yup.string().required("Required !"),
    }),
  });

  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />

          <FormikControl
            control="radio"
            label="Mode of Contact"
            name="modeOfContact"
            options={RadioOptions}
          />

          <FormikControl
            control="input"
            type="text"
            label="Phone Number"
            name="phone"
          />
          <button type="submit" disabled={!formik.isValid}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
