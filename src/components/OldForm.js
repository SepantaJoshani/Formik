import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  email: Yup.string().email("Invalid Email Format").required("Required !"),
  channel: Yup.string().required("Required !"),
});

function OldForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="error">{formik.errors.name}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel && (
            <p className="error">{formik.errors.channel}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "5px 20px",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default OldForm;
