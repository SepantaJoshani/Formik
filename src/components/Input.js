import React from 'react'
import { Field , ErrorMessage } from 'formik'
import ErrorTxt from './ErrorTxt'

const Input = ({label,name,className,...rest}) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field className={className} id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrorTxt}/>
      </div>
    )
}
    

export default Input
