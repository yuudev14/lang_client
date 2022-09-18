import Link from "next/link";
import React from "react";
import {
  MdHome,
  MdOutlineMenuBook,
  MdChat,
  MdVoiceChat,
  MdPersonSearch,
  MdOutlinePeopleAlt,
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
    FRIENDS: {
      path: "/friends",
      Icon: MdOutlinePeopleAlt,
    },
    MESSAGES: {
      path: "/messages",
      Icon: MdChat,
    },
    RANDOM: {
      path: "/random",
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
