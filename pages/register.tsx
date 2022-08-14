import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormStateType>({
    resolver: yupResolver(yupSchema),
  });

  const login = (values: loginFormStateType) => {
    console.log(values);
  };
  return (
    <main>
      <form
        className="form hover:border-gray-300"
        onSubmit={handleSubmit(login)}>
        <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
        <input
          type="text"
          className="input-text"
          placeholder="Username or Email"
          {...register("usernameOrEmail")}
        />

        {errors.usernameOrEmail && (
          <p className="ml-2 text-red-500">{errors.usernameOrEmail.message}</p>
        )}

        <input
          type="password"
          className="input-text"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && (
          <p className="ml-2 text-red-500">{errors.password.message}</p>
        )}
        <button className="btn mt-3">Login</button>
      </form>
    </main>
  );
};

export default Register;
