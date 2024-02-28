import { useState } from "react";
import searchIcon from "../assets/Search.png";

export function SearchBar() {
  const [search, setSearch] = useState("");
  
  return (
    <div className="flex justify-center px-10">
      <div className="relative w-10/12">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border rounded-2xl w-full px-2 py-1 border-slate-200"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img 
          src={searchIcon} 
          alt="Search" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
}
