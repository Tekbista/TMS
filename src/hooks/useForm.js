import { useState } from "react";

const useForm = (initialValues, validate, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    if (validate) {
      const { name, value } = e.target;
      const error = validate(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    
    if (validate) {
      Object.keys(values).forEach((key) => {
        const error = validate(key, values[key]);
        if (error) {
          validationErrors[key] = error;
        }
      });
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
      clearForm();
    }
  };

  const clearForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
