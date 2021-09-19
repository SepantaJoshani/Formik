import React from "react";
import { Field, ErrorMessage } from "formik";
import { Fragment } from "react";
import ErrorTxt from "./ErrorTxt";

const Checkbox = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((option) => (
            <Fragment key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={name} component={ErrorTxt} />
    </div>
  );
};

export default Checkbox;
