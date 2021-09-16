import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import ErrorTxt from "./ErrorTxt";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    yahoo: "",
  },
  phoneNubmers: [""],
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required !"  ),
  email: Yup.string().email("Invalid Email Format").required("Required !"),
  channel: Yup.string().required("Required !"),
  address: Yup.string().required("Required !"),
});

const commentValidate = value => {
let error = {}
if(!value){
  error='Required'
}
return error
}

function OldForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />

          <ErrorMessage name="name" component={ErrorTxt} />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMessage) => <p className="error">{errorMessage}</p>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" validate ={commentValidate} />
        
        <ErrorMessage name="comments" component={ErrorTxt} />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, meta, form } = props;

              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error && (
                    <p className="error">{meta.error}</p>
                  )}
                </div>
              );
            }}
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="yahoo">yahoo Profile</label>
          <Field type="text" id="yahoo" name="social.yahoo" />
        </div>

        <div className="form-control">
          <label>List Of Numbers</label>
          <FieldArray name="phoneNubmers">
            {(fieldArrayProps) => {
              console.log(fieldArrayProps);
              const { form, push, remove } = fieldArrayProps;
              const { values } = form;
              const { phoneNubmers } = values;

              return (
                <div>
                  {phoneNubmers.map((phoneNumber, index) => (
                    <div key={index}>
                      <Field name={`phoneNumbers[${index}]`} />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                      {index <= 5 && (
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
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
      </Form>
    </Formik>
  );
}

export default OldForm;
