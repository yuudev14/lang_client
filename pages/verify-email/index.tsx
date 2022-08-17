import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import PrivateRoute from "../../utils/PrivateRoute";
import { defaultGetServerSidePropFunc } from "../../utils/common";
import { useAppSelector } from "../../hooks/reduxhook";
import { get } from "../../utils/requests";
import axios from "axios";

const VerifyEmail = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const [resendStatus, setResendStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const resendEmail = async () => {
    setLoading(true);
    try {
      await get("/api/auth/resend-verify");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        // if (error.status === "400") {
        // }
      }
    }
    setResendStatus(true);
    setLoading(false);
  };

  return (
    <main>
      <div className="card px-5 max-w-lg w-[80%] py-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-8 items-center">
        <h1 className="text-center text-2xl">Please verify your email</h1>
        <p className="text-center">
          {"You're"} almost there! We sent an email to <b>{user.email}</b>
        </p>

        <p className="text-center">
          Just click on the link in that email to complete your signup. If you{" "}
          {"don't"} see it, you may need to <b>check your spam</b> folder
        </p>
        <div className="flex flex-col gap-3 align-center w-full items-center">
          {resendStatus === true && (
            <p className="text-center">
              Verification email send. Please check your email.
            </p>
          )}
          <p className="text-center">Still {"can't"} find the email?</p>
          <button
            className={`btn w-1/2 max-w-[200px] ${loading && "opacity-60"}`}
            onClick={resendEmail}
            disabled={loading}>
            Resend Email
          </button>
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default VerifyEmail;
