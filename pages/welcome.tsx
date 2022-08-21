import Image from "next/image";
import React from "react";

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

  return (
    <main>
      <div>
        <div className="flex w-1/2 flex-wrap justify-center m-auto gap-6">
          {data.map((_data) => (
            // <figure key={_data.name} className="w-[00px]">
            <div
              key={_data.name}
              className="mt-4 card p-2 cursor-pointer w-[150px] hover:bg-cyan-200 hover:border-cyan-300 hover:scale-110 transition">
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Welcome;
