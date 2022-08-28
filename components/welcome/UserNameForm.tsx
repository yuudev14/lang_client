import React from "react";

const UserNameForm = () => {
  return (
    <div className="form hover:border-gray-300">
      <h1 className="text-3xl font-bold text-center mb-10">
        What is your name
      </h1>
      <div className="flex flex-col">
        <input type="text" className="input-text" placeholder="First Name" />
      </div>
      <div className="flex flex-col">
        <input type="text" className="input-text" placeholder="Last Name" />
      </div>
    </div>
  );
};

export default UserNameForm;
