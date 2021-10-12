import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
const Input = (props) => {
    const { label, name, ...rest } = props

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}></Field>
            <div className="text-danger mb-3">
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    )
}

export default Input
