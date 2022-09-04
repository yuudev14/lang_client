import Image from "next/image";
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxhook";
import { updateUserAction } from "../../store/slicers/user/actions";

const FluentLanguage = () => {
  const data = [
    {
      url: "/wiki/China",
      alpha3: "CHN",
      name: "China",
      language: "Chinese",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/France",
      alpha3: "FRA",
      name: "France",
      language: "French",
      file_url: "//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Germany",
      alpha3: "DEU",
      name: "Germany",
      language: "German",
      file_url: "//upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Japan",
      alpha3: "JPN",
      name: "Japan",
      language: "Japanese",
      file_url: "//upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Philippines",
      alpha3: "PHL",
      name: "Philippines",
      language: "Filipino",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Portugal",
      alpha3: "PRT",
      name: "Portugal",
      language: "Portugues",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Spain",
      alpha3: "ESP",
      name: "Spain",
      language: "Spanish",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/United_Arab_Emirates",
      alpha3: "ARE",
      name: "United Arab Emirates",
      language: "Arabic",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/United_Kingdom",
      alpha3: "GBR",
      name: "United Kingdom",
      language: "English",
      file_url:
        "//upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
      license: "Public domain",
    },
  ];

  const [fluentLang, setFluentLang] = useState<string[]>([]);
  const dispatch = useAppDispatch();

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
        fluent_language: data,
      })
    );
  };
  return (
    <>
      <h1 className="text-center text-2xl font-bold">
        What language can you speak?
      </h1>
      <div className="flex w-full flex-wrap justify-center m-auto gap-6">
        {data.map((_data) => (
          <span
            key={_data.name}
            onClick={() => fluentLangHandler(_data.language)}
            className={`mt-4 card p-2 cursor-pointer w-[150px] hover:bg-cyan-200 hover:border-cyan-300 hover:scale-110 transition ${
              fluentLang.includes(_data.language) &&
              "border-cyan-300 !bg-cyan-200"
            }`}>
            <Image
              src={`/images/flags/${_data.name
                .replaceAll(" ", "-")
                .toLowerCase()}-flag-icon.png`}
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

export default FluentLanguage;
