import React from "react";

const WithNavLayout = ({ children }: any) => {
  const navOptions = ["HOME", "LEARN", "CHAT", "CALL", "MEETUP"];
  return (
    <main className="flex px-8">
      <nav className="w-[15%]">
        <ul>
          {navOptions.map((option) => (
            <li key={option} className="h-14 font-extrabold text-gray-400">
              <div className="cursor-pointer w-max">
                <p>{option}</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default WithNavLayout;
