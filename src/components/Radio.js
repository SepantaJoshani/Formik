import React from "react";
import { Field, ErrorMessage } from "formik";
import { Fragment } from "react/cjs/react.production.min";
import ErrorTxt from "./ErrorTxt";

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                 checked={field.value===option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorTxt} />
    </div>
  );
};

export default Radio;
