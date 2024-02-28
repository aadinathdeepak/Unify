import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SearchBar } from "../components/SearchBar";

export function ProjectPage() {
  const [projects, setProjects] = useState([
    {
      projectName: "E-commerce Website",
      description:
        "Develop an e-commerce website where users can browse products, add them to their cart, and make purchases. The website should have user authentication, product search functionality, and a responsive design.",
      skillsRequired: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML/CSS",
        "JavaScript",
      ],
    },
    {
      projectName: "Task Management App",
      description:
        "Create a task management application that allows users to create, update, and delete tasks. Users should be able to assign tasks to other users, set due dates, and mark tasks as complete.",
      skillsRequired: [
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful API",
      ],
    },
    {
      projectName: "Portfolio Website",
      description:
        "Build a portfolio website to showcase your projects, skills, and experience. The website should have multiple pages including a home page, portfolio page, about page, and contact page.",
      skillsRequired: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
    },
    {
      projectName: "Social Media App",
      description:
        "Develop a social media application where users can create profiles, connect with friends, share posts, and comment on others' posts. The app should have real-time updates and notifications.",
      skillsRequired: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Authentication",
      ],
    },
    {
      projectName: "Chat Application",
      description:
        "Build a real-time chat application that allows users to create chat rooms, join existing rooms, and send messages to each other. The app should support multiple users and have a clean, intuitive interface.",
      skillsRequired: [
        "React",
        "Node.js",
        "Express.js",
        "Socket.io",
        "JavaScript",
        "Responsive Design",
      ],
    },
  ]);
  return (
    <div className="bg-primary rounded-xl p-6 w-9/12">
      <SearchBar />
      {projects.map((e) => (
        <ProjectCard
          title={e.projectName}
          description={e.description}
          Skills={e.skillsRequired}
        />
      ))}
    </div>
  );
}
