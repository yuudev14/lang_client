import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthForm from "../components/authForms/AuthForm";

type registerFormStateType = {
  usernameOrEmail: string;
  password: string;
};

const yupSchema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email("input must be email").required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const registerInputs = [
  {
    type: "text",
    name: "firstName",
    placeholder: "First Name",
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
  },
  {
    type: "text",
    name: "username",
    placeholder: "Username",
  },
  {
    type: "text",
    name: "email",
    placeholder: "Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

const Register = () => {
  const reactHookForm = useForm<registerFormStateType>({
    resolver: yupResolver(yupSchema),
  });

  const register = (values: registerFormStateType) => {
    console.log(values);
  };
  return (
    <main>
      <AuthForm
        submitHandler={register}
        reactHookForm={reactHookForm}
        loginInputs={registerInputs}
        authType="Register"
      />
    </main>
  );
};

export default Register;
