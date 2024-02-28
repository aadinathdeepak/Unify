import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { EventCard } from "../components/EventCard";

export function EventPage() {
  const [events, setEvents] = useState([
    {
      title: "Workshop on React.js",
      description:
        "Learn the fundamentals of React.js and build interactive web applications.",
      URL: "https://example.com/workshop-react",
      imageURL: "https://via.placeholder.com/300",
      date: "2024-03-15",
    },
    {
      title: "Hackathon 2024",
      description:
        "Join the largest hackathon of the year and showcase your coding skills.",
      URL: "https://example.com/hackathon-2024",
      imageURL: "https://via.placeholder.com/300",
      date: "2024-04-01",
    },
    {
      title: "Tech Conference",
      description:
        "Explore the latest trends in technology with industry experts and thought leaders.",
      URL: "https://example.com/tech-conference",
      imageURL: "https://via.placeholder.com/300",
      date: "2024-04-15",
    },
    {
      title: "Introduction to Machine Learning",
      description:
        "Discover the basics of machine learning and its applications in real-world scenarios.",
      URL: "https://example.com/intro-to-ml",
      imageURL: "https://via.placeholder.com/300",
      date: "2024-05-01",
    },{
        title: "Tech Conference",
        description:
          "Explore the latest trends in technology with industry experts and thought leaders.",
        URL: "https://example.com/tech-conference",
        imageURL: "https://via.placeholder.com/300",
        date: "2024-04-15",
      },
      {
        title: "Introduction to Machine Learning",
        description:
          "Discover the basics of machine learning and its applications in real-world scenarios.",
        URL: "https://example.com/intro-to-ml",
        imageURL: "https://via.placeholder.com/300",
        date: "2024-05-01",
      },{
        title: "Tech Conference",
        description:
          "Explore the latest trends in technology with industry experts and thought leaders.",
        URL: "https://example.com/tech-conference",
        imageURL: "https://via.placeholder.com/300",
        date: "2024-04-15",
      },
      {
        title: "Introduction to Machine Learning",
        description:
          "Discover the basics of machine learning and its applications in real-world scenarios.",
        URL: "https://example.com/intro-to-ml",
        imageURL: "https://via.placeholder.com/300",
        date: "2024-05-01",
      }
    // Add more event objects as needed
  ]);

  return <div className="bg-primary rounded-xl p-6">
    <div className="flex flex-col">
    <SearchBar />
      {events.map((e) => (
        <EventCard
          title={e.title}
          description={e.description}
          date={e.date}
          URL={e.URL}
          imageURL={e.imageURL}
        />
      ))}
    </div>
    
  </div>
}
