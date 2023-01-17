import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import searchFormStyle from "../../../../styles/meetup/meetup_search_form.module.scss";

const MeetupSearchForm = () => {
  return (
    <div className="w-full md:w-[55%]">
      <h2 className="text-3xl font-bold mb-8">Meet and learn with someone!</h2>
      <form>
        <div
          className={`flex gap-5 input-container ${searchFormStyle.input_container}`}>
          <div className={searchFormStyle.input_container_box}>
            <MdOutlineSearch size={25} />
            <input
              type="text"
              className="outline-none w-full"
              placeholder="Search for keywords"
            />
          </div>
          <div className={searchFormStyle.input_container_box}>
            <MdOutlineSearch size={25} />
            <input
              type="text"
              className="outline-none w-full"
              placeholder="Neighborhood or city"
            />
          </div>
        </div>
        <button className="btn w-full mt-8">Search</button>
      </form>
    </div>
  );
};

export default MeetupSearchForm;
