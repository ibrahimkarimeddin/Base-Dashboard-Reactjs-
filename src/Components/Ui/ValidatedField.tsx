import React from "react";
import { ErrorMessage, useField, Field } from "formik";
import {  FormGroup } from "reactstrap";
import { useTranslation } from "react-i18next";

const ValidatedField = ({
  name,
  label,
  CustomField,
  icon: Icon,
  optional,
  labelIcon = null,
  formProps,
  isRequired,
  
  ...props
}:any) => {

  const [field, meta] = useField({ name, ...props });
  const [t] = useTranslation();

  let Wrapper = Field;

  if (CustomField) {
    Wrapper = CustomField;
  }
  const fieldProps = props.type === "file" ? {} : { ...field };

  return (
    <>
      {label && (
        <label htmlFor={name}>
          {label} {props.required || isRequired ? "*" : ""} {labelIcon}
        </label>
      )}
      <FormGroup
        className={Icon ? "position-relative has-icon-left" : ""}
        {...formProps}
      >
        <Wrapper
          className={
            "form-control " + (meta.touched && meta.error ? "is-invalid" : "")
          }
          {...fieldProps}
          required={props.isRequired}
          {...props}
         
          
        />
        {Icon && (
          <div className="form-control-position">
            <Icon size={15} />
          </div>
        )}
        <ErrorMessage name={field.name}>
          {(msg) => <span className="field-error text-danger">{t(msg)}</span>}
        </ErrorMessage>
      </FormGroup>
    </>
  );
};


export { ValidatedField };
