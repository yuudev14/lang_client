import React, { useEffect, useState } from "react";

const Verify = () => {
  const [verify, setVerify] = useState(undefined);
  useEffect(() => {}, []);
  return (
    <main>
      <div className="card px-5 max-w-lg w-[80%] py-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-8 items-center">
        <h1 className="text-center text-2xl">Verifying. Please wait...</h1>
      </div>
    </main>
  );
};

export default Verify;
