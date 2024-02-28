import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SearchBar } from "../components/SearchBar";
import { Client, Databases, Query } from "appwrite";

export function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [filter,setFilter] = useState('');
  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65dedcff9fc1f5555b01");

    const databases = new Databases(client);
    let promise = databases.listDocuments(
      "65df74df667cadaa97e1",
      "65df778338999c7e4b03",
      [
        Query.startsWith("name",filter)
      ]
    );

    promise.then(
      function (response) {
        setProjects(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [filter]);

  if(projects.length==0){
    return <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32">
      <SearchBar onChange={(e)=>setFilter(e.target.value)} filter={filter}/>
      <div className="py-3 text-xl text-white">Loading...</div>
    </div>
  }

  return (
    <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[800px]">
      <SearchBar onChange={(e)=>setFilter(e.target.value)}/>
      {projects.map((e) => (
        <ProjectCard
          title={e.name}
          description={e.description}
          Skills={e.skills}
        />
      ))}
    </div>
  );
}
