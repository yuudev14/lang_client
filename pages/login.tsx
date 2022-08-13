import React from "react";

const login = () => {
  return (
    <main>
      <form className="form">
        <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
        <input
          type="text"
          className="input-text"
          placeholder="Username or Email"
        />
        <input type="password" className="input-text" placeholder="Password" />
        <button className="btn mt-3">Login</button>
      </form>
    </main>
  );
};

export default login;
