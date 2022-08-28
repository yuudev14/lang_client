import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { authInputType } from "../../types/types";
import AuthInput from "./AuthInput";
import Link from "next/link";
import { useAppSelector } from "../../hooks/reduxhook";

type authFormPropTypes = {
  submitHandler: SubmitHandler<any>;
  reactHookForm: UseFormReturn<any>;
  loginInputs: authInputType[];
  authType: string;
};
const AuthForm = ({
  submitHandler,
  reactHookForm,
  loginInputs,
  authType,
}: authFormPropTypes) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = reactHookForm;

  const { loading } = useAppSelector((state) => state.userReducer);

  return (
    <form
      className="form form-position hover:border-gray-300"
      onSubmit={handleSubmit(submitHandler)}>
      <h1 className="text-3xl font-bold text-center mb-10">{authType}</h1>

      {loginInputs.map((input) => (
        <AuthInput
          key={input.name}
          register={register}
          errors={errors}
          input={input}
        />
      ))}
      <input
        type="submit"
        className={`btn mt-3 ${loading && "opacity-40"}`}
        value={authType}
        disabled={loading}
      />

      {authType === "Login" ? (
        <div>
          <p className="text-center mt-4">
            {"Don't"} have an account yet?{" "}
            <Link href="/register">
              <a className="text-red-700 underline">register</a>
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/login">
              <a className="text-red-700 underline">login</a>
            </Link>
          </p>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
