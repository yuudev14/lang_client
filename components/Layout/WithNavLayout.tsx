import Link from "next/link";
import React from "react";
import {
  MdHome,
  MdOutlineMenuBook,
  MdChat,
  MdVoiceChat,
  MdPersonSearch,
} from "react-icons/md";

type navOptionType = "HOME" | "LEARN" | "CHAT" | "CALL" | "MEETUP";

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

  const GetIcon = (option: navOptionType) => {
    const Icon = navOptions[option].Icon;
    return <Icon size={30} />;
  };

  return (
    <main className="flex px-8">
      <nav className="w-[15%]">
        <ul>
          {Object.keys(navOptions).map((option) => (
            <li key={option} className="h-14 font-extrabold text-gray-400">
              <Link href={navOptions[option as navOptionType].path}>
                <a className="flex gap-3 items-center">
                  {GetIcon(option as navOptionType)}
                  <p className="cursor-pointer w-max">{option}</p>
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
