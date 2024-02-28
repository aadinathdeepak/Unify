import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { ForumCard } from "../components/ForumCard";
import { useNavigate } from "react-router";

export function ForumPage() {
  const [filter, setFilter] = useState("");
  const [forums, setforums] = useState([]);
  const navigate = useNavigate();
  
  if (forums.length == 0) {
    return (
      <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[800px]">
        <SearchBar
          onChange={(e) => setFilter(e.target.value)}
          filter={filter}
          onClickHandler={()=>navigate("/newforum")}
        />
        <div className="py-3 text-xl text-white">Loading...</div>
      </div>
    );
  }
  return (
    <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[800px]">
      <SearchBar onChange={(e) => setFilter(e.target.value)} onClickHandler={()=>navigate("/newforum")}/>
      {/* {forums.map((e) => (
        <ForumCard
          question={e.question}
          description={e.description}
        />
      ))} */}
      <ForumCard question={"hello how are you?"} description={"this is a test component"}/>

    </div>
  );
}
