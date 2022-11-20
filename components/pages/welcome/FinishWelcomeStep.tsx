import Link from "next/link";
import React from "react";

const FinishWelcomeStep = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl">
        Finish Step. Thanks for filling up the forms
      </h1>
      <Link href="/">
        <a className="btn m-auto">Go to Homepage</a>
      </Link>
    </div>
  );
};

export default FinishWelcomeStep;
