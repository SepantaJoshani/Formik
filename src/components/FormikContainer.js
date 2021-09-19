import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const optionValues = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioValues = [
    { key: "Option 1", value: "roption1" },
    { key: "Option 2", value: "roption2" },
    { key: "Option 3", value: "roption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Email Type Error").required("Required !"),
    description: Yup.string().required("Required !"),
  });
  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="email"
            name="email"
            className={formik.isValid ? "form-control" : "form-control error"}
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
            id="description"
          />

          <FormikControl
            control="select"
            label="Select"
            name="selectOption"
            options={optionValues}
          />

          <FormikControl
            control="radio"
            name="radioOptions"
            label="Radio Options"
            options={radioValues}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
