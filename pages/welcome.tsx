/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import MainLayout from "../components/Layout/MainLayout";
import FinishWelcomeStep from "../components/pages/welcome/FinishWelcomeStep";
import LanguageForm from "../components/pages/welcome/LanguageForm";
import UserNameForm from "../components/pages/welcome/UserNameForm";
import { useAppSelector } from "../hooks/reduxhook";
import { defaultGetServerSidePropFunc } from "../utils/constants";
import PrivateRoute from "../utils/PrivateRoute";

const Welcome = () => {
  const numOfSteps = 4;
  const [currStep, setCurrStep] = useState(0);
  const { user, loading, auth } = useAppSelector((state) => state.userReducer);
  useEffect(() => {
    let step: number;
    if (!user.firstName || !user.lastName) {
      step = 1;
    } else if (user.fluent_language?.length == 0) {
      step = 2;
    } else if (user.language_to_study?.length === 0) {
      step = 3;
    } else {
      step = 4;
    }
    setCurrStep(step);
  }, []);
  return (
    <MainLayout>
      <main>
        {auth === true && (
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
        )}
      </main>
    </MainLayout>
  );
};
// export const getServerSideProps: GetServerSideProps = PrivateRoute(
//   defaultGetServerSidePropFunc
// );
export default Welcome;
