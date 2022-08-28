import { useState } from "react";
import FluentLanguage from "../components/welcome/FluentLanguage";

const Welcome = () => {
  const numOfSteps = 3;
  const [currStep, setCurrStep] = useState(1);
  console.log((currStep / numOfSteps) * 100);
  return (
    <main>
      <div className="w-full max-w-[515px] m-auto py-4">
        <div className="mt-10 p-2">
          <div className="w-full bg-gray-200 p-3 m-auto rounded-3xl mb-6 transition">
            <div
              className={`p-3 bg-green-400 rounded-3xl`}
              style={{ width: `${(currStep / numOfSteps) * 100}%` }}></div>
          </div>
          <FluentLanguage />
          <div className="flex gap-2 mt-10 justify-between">
            {currStep > 1 && (
              <button
                className="btn mr-auto"
                onClick={() => setCurrStep(currStep - 1)}>
                Back
              </button>
            )}

            {currStep < numOfSteps && (
              <button
                className="btn ml-auto"
                onClick={() => setCurrStep(currStep + 1)}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
