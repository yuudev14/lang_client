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
        const status = loginDispatch.payload.status;
        const error = loginDispatch.payload.error;

        let type = "error";
        let message = "An error occured";
        let field: "password" | "usernameOrEmail" = "password";

        if (status === 401) {
          type = "password error";
          message = "Wrong password";
        }

        if (status === 404) {
          type = "usernameOrEmail error";
          message = "account does not exist";
          field = "usernameOrEmail";
        }
        reactHookForm.setError(field, {
          type,
          message,
        });
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
