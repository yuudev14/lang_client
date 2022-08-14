import React from "react";
import { UseFormRegister } from "react-hook-form";
import { authInputType } from "../../types/types";

type authInputProps = {
  register: UseFormRegister<any>;
  errors: any;
  input: authInputType;
};
const AuthInput = ({ register, errors, input }: authInputProps) => {
  return (
    <div className="flex flex-col">
      <input
        type={input.type}
        className="input-text"
        placeholder={input.placeholder}
        {...register(input.name)}
      />

      {errors[input.name] && (
        <p className="ml-2 text-red-500">{errors[input.name].message}</p>
      )}
    </div>
  );
};

export default AuthInput;
