import React from 'react'
import { Field , ErrorMessage } from 'formik'
import ErrorTxt from './ErrorTxt'


const Textarea = ({label,name,className,...rest}) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={ErrorTxt} />
        </div>
    )
}

export default Textarea
