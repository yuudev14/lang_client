import React from "react";
import Image from "next/image";

const MeetUpPost = () => {
  return (
    <div className="flex gap-3 border-t py-5">
      <figure>
        <Image
          src={`/images/no_image.jpg`}
          alt=""
          width={"150px"}
          height={"100px"}
          className="rounded-md"
        />
      </figure>
      <div className="flex flex-col">
        <time className="">June 14 2000, 15:35</time>
        <h2 className="text-xl font-bold">
          Learn English form People around the World
        </h2>
        <p>Online</p>

        <p className="mt-10">
          <span>24 attendees</span>
        </p>
      </div>
    </div>
  );
};

export default MeetUpPost;
