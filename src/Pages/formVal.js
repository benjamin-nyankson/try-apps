import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./styles.css";
function formVal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation
  console.log(watch("example")); // you can watch individual input by pass the name of the input
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          minLength: 2,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "minLength" && (
        <p>First name must exceed 2 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Laste Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Password</label>a
      <input {...register("password", { pattern: /^(?=.{8,})/i })} />
      {errors.password && <p>password must be 8 or characters long</p>}
      <label>Email</label>a
      <input
        {...register("email", {
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
        })}
      />
      {errors.email && <p>email is must include @</p>}
      <input type="submit" />
    </form>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);