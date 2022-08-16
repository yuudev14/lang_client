import React from "react";

const VerifyEmail = () => {
  return (
    <main>
      <div className="card px-5 max-w-lg w-[80%] py-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-8 items-center">
        <h1 className="text-center text-2xl">Please verify your email</h1>
        <p>
          {"You're"} almost there! We sent an email to <b>user@gmail.com</b>
        </p>

        <p>
          Just click on the link in that email to complete your signup. If you{" "}
          {"don't"} see it, you may need to <b>check your spam</b> folder
        </p>
        <div className="flex flex-col gap-3 align-center">
          <p>Still {"can't"} find the email?</p>
          <button className="btn">Resend Email</button>
        </div>
      </div>
    </main>
  );
};

export default VerifyEmail;
