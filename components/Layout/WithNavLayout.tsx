import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  MdHome,
  MdOutlineMenuBook,
  MdChat,
  MdVoiceChat,
  MdPersonSearch,
} from "react-icons/md";
import { navOptionType } from "../../types/types";
import GetOptionButton from "../common/GetOptionButton";

const WithNavLayout = ({ children }: any) => {
  const navOptions = {
    HOME: {
      path: "/",
      Icon: MdHome,
    },
    LEARN: {
      path: "/learn",
      Icon: MdOutlineMenuBook,
    },
    CHAT: {
      path: "/chat",
      Icon: MdChat,
    },
    CALL: {
      path: "/call",
      Icon: MdVoiceChat,
    },
    MEETUP: {
      path: "/meetup",
      Icon: MdPersonSearch,
    },
  };

  return (
    <main className="flex px-8">
      <nav className="w-[15%]">
        <ul>
          {Object.keys(navOptions).map((option) => (
            <li
              key={option}
              className="mb-10 font-extrabold text-gray-400 hover:text-tertiary">
              <Link href={navOptions[option as navOptionType].path}>
                <a className="flex gap-3 items-center">
                  <GetOptionButton
                    option={option as navOptionType}
                    navOptions={navOptions}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default WithNavLayout;
