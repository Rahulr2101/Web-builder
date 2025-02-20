import React, { useEffect, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addPage } from "./feature/filesSlice";

export const Home = () => {
  const [createClick, setCreateClick] = useState(false);
  const [page, setPage] = useState({ name: "", path: "" });
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPage((prevPage) => ({ ...prevPage, [name]: {path:value,element:[],} }));
  };
  useEffect(()=>{
      dispatch(addPage({name:"Home",id:2}))
  },[])
  return (
    <div className="bg-primary h-screen flex flex-row items-center justify-center gap-10">
      <div className="flex flex-col min-w-96 min-h-[450px] text-white bg-accent rounded-md p-5">
        {!createClick ? (
          <p className="font-bold text-2xl">Create Pages</p>
        ) : (
          <div className="flex flex-col items-center w-full ">
            <CgWebsite size={200} className="w-24 h-24 stroke-gray-600" />
            <p>Page Name</p>
            <input
              name="name"
              className="text-black p-1 rounded-md"
              value={page.name}
              onChange={handleInputChange}
            />
            <p>Path</p>
            <input
              name="path"
              className="text-black p-1 rounded-md"
              value={page.path}
              onChange={handleInputChange}
            />
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
