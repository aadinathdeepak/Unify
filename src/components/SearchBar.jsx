import { useState } from "react";
import searchIcon from "../assets/Search.png";
import addnew from ".././assets/AddNew.png";

export function SearchBar({onChange,filter,onClickHandler}) {
  return (
    <div className="flex justify-center px-10">
      <div className="relative w-10/12">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border rounded-2xl w-full px-2 py-1 border-slate-200"
          onChange={onChange}
          value={filter}
        />
        <img 
          src={searchIcon} 
          alt="Search" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
      <button onClick={onClickHandler}>
      <img className="size-9 ml-7" src={addnew}/>
      </button>
        
    </div>
  );
}
