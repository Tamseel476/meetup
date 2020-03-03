import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./style.css";

function Register() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };


  return (
    <form className="Register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register({ required: true })} />
      <ErrorMessage error={errors.firstName} />

      <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} />

      
      
      <label>Email</label>
      <input
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <ErrorMessage error={errors.email} />
      <label>Password</label>
      <input name="password"  ref={register({ required: true}) }
      />
        <ErrorMessage error={errors.firstName} />

      <label>Mobile Number</label>
      <input name="mobilenumber"  ref={register({ required: true}) }
      />
      <ErrorMessage error={errors.firstName} />

      <input disabled={isSubmitting} type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);
export default Register;