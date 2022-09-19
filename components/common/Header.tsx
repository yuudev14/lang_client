import React from "react";
import { MdPerson } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-white py-4 px-10 border-b-2 border-solid fixed w-full top-0 left-0">
      <div className="max-w-7xl m-auto flex justify-between w-full">
        <h1 className="text-3xl font-extrabold text-primary">Language</h1>
        <nav>
          <ul>
            <li>
              <MdPerson size={45} className="cursor-pointer text-secondary" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
