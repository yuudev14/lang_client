import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAppDispatch } from "../../hooks/reduxhook";
import { verifyEmailAction } from "../../store/slicers/user/actions";

const Verify = () => {
  const [verify, setVerify] = useState<undefined | boolean>(undefined);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { token } = router.query;

  useEffect(() => {
    if (token !== undefined) {
      (async () => {
        try {
          dispatch(verifyEmailAction(token as string));

          setVerify(true);
          setTimeout(() => {
            router.push("/welcome");
          }, 2000);
        } catch (error) {
          console.log(error);
          if (axios.isAxiosError(error)) {
            setError("Error occured. Can't verify email");
          }
          setVerify(false);
        }
      })();
    }
  }, [router, token, dispatch]);
  return (
    <main>
      <div className="card px-5 max-w-lg w-[80%] py-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-8 items-center">
        <h1 className="text-center text-2xl">
          {verify === undefined
            ? "Verifying. Please wait..."
            : verify === true
            ? "Email successfully verified. Will send you to the welcome page"
            : error}
        </h1>
      </div>
    </main>
  );
};

export default Verify;
