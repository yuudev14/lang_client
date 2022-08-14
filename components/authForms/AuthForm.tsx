import React from "react";
import { authInputType } from "../../types/types";
import Input from "./Input";

type authFormPropTypes = {
  submitHandler: Function;
  reactHookForm: any;
  loginInputs: authInputType[];
};
const AuthForm = ({
  submitHandler,
  reactHookForm,
  loginInputs,
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
      <h1 className="text-3xl font-bold text-center mb-10">Login</h1>

      {loginInputs.map((input) => (
        <Input
          key={input.name}
          register={register}
          errors={errors}
          input={input}
        />
      ))}
      <button className="btn mt-3">Login</button>
    </form>
  );
};

export default AuthForm;
