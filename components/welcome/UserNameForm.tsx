import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useAppSelector } from "../../hooks/reduxhook";

const UserNameForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const user = useAppSelector((state) => state.userReducer.user);

  useEffect(() => {
    console.log(user);
    setData({
      firstName: user.firstName,
      lastName: user.lastName,
    });
  }, [user]);

  const onChangeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  const onBlurHandler = (e: SyntheticEvent) => {
    console.log("asdasdasdasdas");
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
          name="lastName"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
    </div>
  );
};

export default UserNameForm;
