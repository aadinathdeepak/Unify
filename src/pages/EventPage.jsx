import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { EventCard } from "../components/EventCard";
import { Client, Databases, Query } from "appwrite";

export function EventPage() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65dedcff9fc1f5555b01");

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "65df74df667cadaa97e1",
      "65df7f05999aba0a5552",
      [Query.startsWith("question", filter)]
    );

    promise.then(
      function (response) {
        setEvents(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [filter]);

  if (events.length == 0) {
    return (
      <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[800px]">
        <SearchBar
          onChange={(e) => setFilter(e.target.value)}
          filter={filter}
        />
        <div className="py-3 text-xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32">
      <SearchBar onChange={(e) => setFilter(e.target.value)} />
      {events.map((e) => (
        <EventCard
          title={e.name}
          description={e.description}
          date={e.date}
          URL={e.URL}
          imageURL={e.image_url}
        />
      ))}
    </div>
  );
}
