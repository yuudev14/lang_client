import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthForm from "../components/authForms/AuthForm";

type loginFormStateType = {
  usernameOrEmail: string;
  password: string;
};

const yupSchema = yup
  .object({
    usernameOrEmail: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const loginInputs = [
  {
    type: "text",
    name: "usernameOrEmail",
    placeholder: "Username Or Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

const Login = () => {
  const reactHookForm = useForm<loginFormStateType>({
    resolver: yupResolver(yupSchema),
  });

  const login = (values: loginFormStateType) => {
    console.log(values);
  };
  return (
    <main>
      <AuthForm
        submitHandler={login}
        reactHookForm={reactHookForm}
        loginInputs={loginInputs}
      />
    </main>
  );
};

export default Login;
