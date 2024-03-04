import React, { FC, useState } from "react";
import { ErrorMessage, useField, Field } from "formik";
import { FormGroup } from "reactstrap";
import PropTypes from "prop-types";
import { Eye, EyeOff } from "react-feather";
import "./index.css";

interface PasswordFieldProps {
  name: string;
  label?: string;
}

const PasswordField: FC<PasswordFieldProps> = ({ name, label, ...props }) => {
  const [field, meta] = useField({ name, ...props });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const EyeIcon = showPassword ? Eye : EyeOff;

  const toggleShow = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {label && <label className="change_password_body" htmlFor={name}>{label}</label>}
      <FormGroup className={"position-relative has-icon-left"}>
        <Field
          className={
            
            "form-control " + (meta.touched && meta.error ? "is-invalid" : "") 
          }
          name={name}
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          {...props}
        />
        <div className="form-control-position">
          <EyeIcon
            fontSize={12}
            onClick={toggleShow}
            className="cursor-pointer change_password_body"
          />
        </div>
        <ErrorMessage
          className="field-error text-danger"
          component="div"
          name={field.name}
        />
      </FormGroup>
    </>
  );
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
};

export { PasswordField };