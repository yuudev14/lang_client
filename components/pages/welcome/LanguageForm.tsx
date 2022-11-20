import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxhook";
import { updateUserAction } from "../../../store/slicers/user/actions";
import { languages } from "../../../utils/constants";
type LanguageFormProps = {
  type: "language_to_study" | "fluent_language";
};
const LanguageForm = ({ type }: LanguageFormProps) => {
  const [fluentLang, setFluentLang] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.user);

  useEffect(() => {
    const lang = user[type];
    setFluentLang(lang ? lang : []);
  }, [user, type]);

  const fluentLangHandler = (lang: string) => {
    let data: string[];
    if (fluentLang.includes(lang)) {
      data = fluentLang.filter((_lang: string) => _lang !== lang);
    } else {
      data = [...fluentLang, lang];
    }
    setFluentLang(data);
    dispatch(
      updateUserAction({
        [type]: data,
      })
    );
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold">
        {type === "language_to_study"
          ? "What language you want to learn?"
          : "What language you can speak"}
      </h1>
      <div className="flex w-full flex-wrap justify-center m-auto gap-6">
        {languages.map((_data) => (
          <span
            key={_data.language}
            onClick={() => fluentLangHandler(_data.language)}
            className={`mt-4 card p-2 cursor-pointer w-[150px] hover:bg-cyan-200 hover:border-cyan-300 hover:scale-110 transition ${
              fluentLang.includes(_data.language) &&
              "border-cyan-300 !bg-cyan-200"
            }`}>
            <Image
              src={`/images/flags/${_data.language}-flag-icon.png`}
              alt=""
              width={"150px"}
              height={"100px"}
              className="rounded-md"
            />
            <p className="text-center mt-2">{_data.language}</p>
          </span>
        ))}
      </div>
    </>
  );
};

export default LanguageForm;
