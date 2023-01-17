/* eslint-disable react/no-unescaped-entities */
import React from "react";

const TagSearch = () => {
  const tags = [
    "Starting soon",
    "Today",
    "Tomorrow",
    "This week",
    "Online",
    "In Person",
  ];
  return (
    <div className="w-full md:w-[55%]">
      <h2 className="text-3xl font-bold mb-8">See what's happening</h2>
      <ul className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <li className="tags mt-1 cursor-pointer" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagSearch;
