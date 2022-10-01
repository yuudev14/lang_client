import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxhook";
import { updateUserAction } from "../../store/slicers/user/actions";

const UserNameForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const user = useAppSelector((state) => state.userReducer.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
    });
  }, [user]);

  const onChangeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  const onBlurHandler = () => {
    dispatch(updateUserAction(data));
  };
  return (
    <div className="form hover:border-gray-300">
      <h1 className="text-3xl font-bold text-center mb-10">
        What is your name
      </h1>
      <div className="flex flex-col">
        <input
          type="text"
          className="input-text"
          placeholder="First Name"
          defaultValue={data.firstName}
          name="firstName"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          className="input-text"
          placeholder="Last Name"
          defaultValue={data.lastName}
          name="lastName"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
    </div>
  );
};

export default UserNameForm;
