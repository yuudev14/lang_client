import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { authInputType } from "../../types/types";
import AuthInput from "./AuthInput";

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
  return (
    <form
      className="form hover:border-gray-300"
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
      <button className="btn mt-3">{authType}</button>
    </form>
  );
};

export default AuthForm;
