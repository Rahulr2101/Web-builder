import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "./feature/filesSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [createClick, setCreateClick] = useState(false);
  const [selectPage, setSelectedPage] = useState(null);
  const navigate = useNavigate();
  const [page, setPage] = useState({ name: "", path: "" });
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.files.files);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPage((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreatePage = () => {
    if (!createClick) {
      setCreateClick(true);
    } else if (page.name && page.path) {
      dispatch(addPage(page));
      setPage({ name: "", path: "" });
      setCreateClick(false);
    }
  };

  return (
    <div className="bg-primary h-screen flex flex-row items-center justify-center gap-10">
      <div className="flex flex-col min-w-96 min-h-[450px] text-white bg-accent rounded-md p-5">
        {!createClick ? (
          <div>
            <p className="font-bold text-2xl">Create Pages</p>
            <div className="flex flex-col gap-4 p-2 top-3">
              {pages.map((el) => {
                return (
                  <div
                    className="h-[50px] bg-border rounded-md flex flex-row items-center p-2  gap-4"
                    onClick={() => {
                      setSelectedPage(el);
                    }}
                  >
                    <CgWebsite />
                    <p>{el.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
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
          onClick={handleCreatePage}
        >
          {createClick ? "Submit" : "Create Page"}
        </button>
      </div>
      <div className="flex flex-col min-w-96 min-h-[450px] text-white bg-accent rounded-md p-5 gap-4">
       { selectPage &&
       <>
        <div className="text-white">
          <p className="text-xs text-slate-600 font-normal">Page Name</p>
          <p className="text-xl text-white">{selectPage.name}</p>
        </div>
        <div className="text-white">
          <p className="text-xs text-slate-600 font-normal">Path</p>
          <p className="text-xl text-white">root{selectPage.path}</p>
        </div>
        <button className="mt-auto bg-border rounded-md" onClick={()=>navigate(`/designer/${selectPage.path}`)}>
          Create Design
        </button>
        </>}
      </div>
    </div>
  );
};
