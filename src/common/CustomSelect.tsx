import { FieldProps, useField } from "formik";
import React from "react";
import Select from "react-select";
import {Form } from 'react-bootstrap'
type OptionsType<OptionType> = OptionType[]; // { [x:string]: any }

type  ValueType<OptionType> = OptionType | OptionsType<OptionType> | null | undefined;

  interface Option {
    label: string;
    value: string;
  }

  interface CustomSelectProps extends FieldProps {
    options: OptionsType<Option>;
    isMulti?: boolean;
    className?: string;
    placeholder?: string;
    name: string,
    label: string,
  }


  
export const CustomSelect = ({
  name,
  label,
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}: CustomSelectProps) => {
  const onChange = (option: ValueType<Option | Option[]>) => {    
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item.value)
        : (option as Option).value
    );
  };

  const getValue = () => {
    if (options && field.value) {   
      return isMulti? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };
  const [field1, meta] = useField(field.name); 
  // console.log(meta.touched);
  return (
    <div className="col-md-12">
      <Form.Group controlId={name}>
          <Form.Label>{label}</Form.Label>
                <Select
                  className={className}
                  name={field.name}
                  value={getValue()}
                  onChange={onChange}
                  placeholder={placeholder}
                  options={options}
                  isMulti={isMulti}
                />
                {meta.error ? (
                    <span className="text text-danger">{meta.error}</span>
            ) : null}
        </Form.Group>
    </div>
    
   
  );
};

export default CustomSelect;
