import { useField } from 'formik';
import React from 'react'
import {Form } from 'react-bootstrap'

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
}


export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name); 
    return (
        <div className="col-md-12">
            <Form.Group controlId={props.name}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control style= {meta.touched && meta.error ? {border: "1px solid red"} : {}} {...field} type={props.type} placeholder={props.placeholder}  title=""/>
                {meta.touched && meta.error ? (
                    <span className="text text-danger">{meta.error}</span>
            ) : null}
            </Form.Group>
        </div>
    )
}



