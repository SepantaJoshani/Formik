import React from "react";
import { Field, ErrorMessage } from "formik";
import { Fragment } from "react/cjs/react.production.min";
import ErrorTxt from './ErrorTxt'

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
        <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((option) => (
            <Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                value={option.value}
                {...field}
                checked={field.value === option.value}
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

export default Radio;
