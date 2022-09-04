import { useEffect, useState } from "react";
import FinishWelcomeStep from "../components/welcome/FinishWelcomeStep";
import LanguageForm from "../components/welcome/LanguageForm";
import UserNameForm from "../components/welcome/UserNameForm";
import { useAppSelector } from "../hooks/reduxhook";

const Welcome = () => {
  const numOfSteps = 4;
  const user = useAppSelector((state) => state.userReducer.user);
  const [currStep, setCurrStep] = useState(0);
  useEffect(() => {
    let step: number;
    if (!user.firstName && !user.lastName) {
      step = 1;
    } else if (user.fluent_language?.length == -0) {
      step = 2;
    } else if (user.language_to_study?.length === 0) {
      step = 3;
    } else {
      step = 4;
    }
    setCurrStep(step);
  }, [user]);
  return (
    <main>
      <div className="w-full max-w-[515px] m-auto py-4">
        <div className="mt-10 p-2">
          <div className="w-full bg-gray-200 p-3 m-auto rounded-3xl mb-6 transition">
            <div
              className={`p-3 bg-green-400 rounded-3xl`}
              style={{ width: `${(currStep / numOfSteps) * 100}%` }}></div>
          </div>
          {currStep === 1 && <UserNameForm />}
          {currStep === 2 && <LanguageForm type="fluent_language" />}
          {currStep === 3 && <LanguageForm type="language_to_study" />}
          {currStep === 4 && <FinishWelcomeStep />}

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
