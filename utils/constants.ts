import { io } from "socket.io-client";

export const defaultGetServerSidePropFunc = async () => {
  return {
    props: {},
  };
};

export const socket = io(process.env.NEXT_PUBLIC_SERVER as string, {
  autoConnect: false,
});

export const languages = [
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
