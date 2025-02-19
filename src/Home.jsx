import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";

export const Home = () => {
  const [createClick, setCreateClick] = useState(false);
  return (
    <div className="bg-primary h-screen flex flex-row items-center justify-center gap-10">
      <div className="flex flex-col min-w-96 min-h-[450px]  text-white bg-accent rounded-md p-5">
        {!createClick ? (
          <p className="font-bold text-2xl">Create Pages</p>
        ) : (
          <div className="flex flex-col items-center w-full ">
            <CgWebsite size={200} className="w-24 h-24 stroke-gray-600" />
            <p>Page Name</p>
            <p>shdu</p>
          </div>
        )}

        <button
          className="bg-border w-full rounded-md h-[30px] mt-auto"
          onClick={() => setCreateClick(!createClick)}
        >
          Create Page
        </button>
      </div>
      <div className="flex flex-col min-w-96 min-h-[450px] bg-accent rounded-md"></div>
    </div>
  );
};
