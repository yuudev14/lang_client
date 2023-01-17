/* eslint-disable react/no-unescaped-entities */
import React from "react";

const TagSearch = () => {
  return (
    <div className="w-full md:w-[55%]">
      <h2 className="text-3xl font-bold mb-8">See what's happening</h2>
      <ul className="flex flex-wrap gap-1">
        <li className="tags mt-1 cursor-pointer">Starting soon</li>
        <li className="tags mt-1 cursor-pointer">Today</li>
        <li className="tags mt-1 cursor-pointer">Tomorrow</li>
        <li className="tags mt-1 cursor-pointer">This week</li>
        <li className="tags mt-1 cursor-pointer">Online</li>
        <li className="tags mt-1 cursor-pointer">In Person</li>
      </ul>
    </div>
  );
};

export default TagSearch;
