import React from "react";
import { Field, ErrorMessage } from "formik";
import Errortxt from "./ErrorTxt";
const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((option) => (
          <option value={option.value} key={option.key}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={Errortxt} />
    </div>
  );
};

export default Select;
