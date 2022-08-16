import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthForm from "../components/authForms/AuthForm";
import { registerAction } from "../store/slicers/user/actions";
import { useRouter } from "next/router";
import { useAppDispatch } from "../hooks/reduxhook";
import { GetServerSideProps } from "next";
import alreadylogin from "../utils/AlreadyLogin";

export type registerFormStateType = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
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

  const dispatch = useAppDispatch();
  const router = useRouter();

  const register = async (values: registerFormStateType) => {
    try {
      const registerDispatch = await dispatch(registerAction(values));
      if ("error" in registerDispatch.payload) {
        const error = registerDispatch.payload.error;
        for (const e in error) {
          reactHookForm.setError(e as any, {
            type: "exist already",
            message: error[e],
          });
        }
      } else {
        router.push("/verify-email");
      }
    } catch (error) {
      console.log(error);
    }
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

export const getServerSideProps: GetServerSideProps = alreadylogin;

export default Register;
