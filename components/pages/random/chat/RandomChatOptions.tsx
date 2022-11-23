import React, { useState } from "react";
import { IoMdOptions } from "react-icons/io";

const RandomChatOptions = () => {
  const [optionState, setOptionState] = useState(false);
  return (
    <div className="w-full flex flex-row">
      <div className="ml-auto relative">
        <IoMdOptions
          size={20}
          cursor="pointer"
          onClick={() => setOptionState(!optionState)}
        />
        {optionState && (
          <section className="absolute bg-white right-0 rounded-md shadow-lg border-2 border-solid mt-2">
            <ul className="flex flex-col w-max">
              <li className="hover:bg-slate-200 px-4 py-2 cursor-pointer">
                Translate Message
              </li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default RandomChatOptions;
