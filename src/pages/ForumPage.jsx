import { useState } from "react";
import { SearchBar } from "../components/SearchBar";

export function ForumPage() {
  const [filter, setFilter] = useState("");
  return (
    <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[800px]">
      <SearchBar onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
}
