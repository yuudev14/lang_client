import React, { useState } from "react";
import { IoMdOptions } from "react-icons/io";
import { languages } from "../../../../utils/constants";

const RandomChatOptions = () => {
  const [optionState, setOptionState] = useState(false);
  return (
    <div className="w-full flex flex-row">
      <div className="relative">
        <IoMdOptions
          size={20}
          cursor="pointer"
          onClick={() => setOptionState(!optionState)}
        />
        {optionState && (
          <section className=" absolute bg-white left-0 rounded-md shadow-lg border-2 border-solid mt-2">
            <ul className="flex flex-col w-max">
              <li className="hover:bg-slate-200 px-4 py-2 cursor-pointer relative">
                Translate
                <div className="min-w-[100px] max-w-max absolute left-full top-0 ml-3 bg-white rounded-md shadow-lg border-2 border-solid">
                  <ul>
                    {languages.map((lang) => (
                      <li className="px-4 py-2" key={lang.name}>
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
