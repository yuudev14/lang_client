import Image from "next/image";
import React, { useState } from "react";

const Welcome = () => {
  const data = [
    {
      url: "/wiki/China",
      alpha3: "CHN",
      name: "China",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/France",
      alpha3: "FRA",
      name: "France",
      file_url: "//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Germany",
      alpha3: "DEU",
      name: "Germany",
      file_url: "//upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Japan",
      alpha3: "JPN",
      name: "Japan",
      file_url: "//upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Philippines",
      alpha3: "PHL",
      name: "Philippines",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Portugal",
      alpha3: "PRT",
      name: "Portugal",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/Spain",
      alpha3: "ESP",
      name: "Spain",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/United_Arab_Emirates",
      alpha3: "ARE",
      name: "United Arab Emirates",
      file_url:
        "//upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
      license: "Public domain",
    },
    {
      url: "/wiki/United_Kingdom",
      alpha3: "GBR",
      name: "United Kingdom",
      file_url:
        "//upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
      license: "Public domain",
    },
  ];

  const [percent, setPercent] = useState(0);
  const [fluentLang, setFluentLang] = useState<string[]>([]);

  const fluentLangHandler = (lang: string) => {
    let data: string[];
    if (fluentLang.includes(lang)) {
      data = fluentLang.filter((_lang: string) => _lang !== lang);
    } else {
      data = [...fluentLang, lang];
    }
    setFluentLang(data);
  };

  return (
    <main>
      <div className="w-full max-w-[515px] m-auto">
        <div className="mt-10 p-2">
          <div className="w-full bg-gray-200 p-3 m-auto rounded-3xl mb-6">
            <div
              className={`w-[${percent}%] p-3 bg-green-400 rounded-3xl`}></div>
          </div>
          <div className="flex w-full flex-wrap justify-center m-auto gap-6">
            {data.map((_data) => (
              <span
                key={_data.name}
                onClick={() => fluentLangHandler(_data.name)}
                className={`mt-4 card p-2 cursor-pointer w-[150px] hover:bg-cyan-200 hover:border-cyan-300 hover:scale-110 transition ${
                  fluentLang.includes(_data.name) &&
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
                <p className="text-center mt-2">{_data.name}</p>
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-10 justify-between">
            <button className="btn">Back</button>
            <button className="btn">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
