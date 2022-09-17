import React from "react";
import { MdPerson } from "react-icons/md";
import { SECONDARY } from "../../utils/constants";

const Header = () => {
  return (
    <div className="bg-white py-4 px-10 border-b-2 border-solid absolute w-full top-0 left-0">
      <div className="max-w-7xl m-auto flex justify-between w-full">
        <h1 className="text-3xl font-extrabold text-primary">Language</h1>
        <nav>
          <ul>
            <li>
              <MdPerson
                size={45}
                color={SECONDARY}
                className="cursor-pointer"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
