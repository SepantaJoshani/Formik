import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => console.log(values);

const ValidationSchema = Yup.object({
  name:Yup.string().required('Required !'),
  email:Yup.string().email('Invalid Email Format').required('Required !'),
  channel:Yup.string().required('Required !')

function OldForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    
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
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
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
