import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthForm from "../components/authForms/AuthForm";
import { loginAction } from "../store/slicers/user/actions";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/reduxhook";
import { GetServerSideProps } from "next";
import alreadylogin from "../utils/AlreadyLogin";

export type loginFormStateType = {
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

  const dispatch = useAppDispatch();
  const router = useRouter();

  const login = async (values: loginFormStateType) => {
    try {
      const loginDispatch = await dispatch(loginAction(values));
      if ("error" in loginDispatch.payload) {
        const error = loginDispatch.payload.error;
        for (const e in error) {
          reactHookForm.setError(e as any, {
            type: "login error",
            message: error[e],
          });
        }
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <AuthForm
        submitHandler={login}
        reactHookForm={reactHookForm}
        loginInputs={loginInputs}
        authType="Login"
      />
    </main>
  );
};
export const getServerSideProps: GetServerSideProps = alreadylogin;
export default Login;
