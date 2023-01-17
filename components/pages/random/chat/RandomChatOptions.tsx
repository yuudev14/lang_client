import React, { useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";
import { languages } from "../../../../utils/constants";
import random_chat_style from "../../../../styles/meetup/index.module.scss";

interface RandomChatOptionsProps {
  language: string;
  setLanguage: Function;
}

const RandomChatOptions = ({
  language,
  setLanguage,
}: RandomChatOptionsProps) => {
  const [optionState, setOptionState] = useState(false);

  // open and close sub option
  const open_sub_option = (id: string) => {
    document.querySelector(id)?.classList.toggle("hidden");
  };

  const setLangHandler = (lang: string) => {
    localStorage.setItem("translate", lang);
    setLanguage(lang);
    setOptionState(false);
  };

  return (
    <div className="w-full flex flex-row">
      <div className="relative">
        <IoMdOptions
          size={20}
          cursor="pointer"
          onClick={() => setOptionState(!optionState)}
        />
        {optionState && (
          <section className="absolute bg-white left-0 rounded-md shadow-lg border-2 border-solid mt-2">
            <ul className="flex flex-col w-max">
              <li
                className={random_chat_style.random_options}
                onClick={() => open_sub_option("#translate_sub_menu")}>
                {`Translate (${language ? language : "None"})`}
                <div
                  className={`${random_chat_style.sub_menu} hidden`}
                  id="translate_sub_menu">
                  <ul>
                    {languages.map((lang) => (
                      <li
                        className={random_chat_style.random_options}
                        onClick={() => setLangHandler(lang.language)}
                        key={lang.name}>
                        <div className="flex items-center">
                          <span>{lang.language}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default RandomChatOptions;
