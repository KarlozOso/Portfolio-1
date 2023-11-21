import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/laptop.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      image: chatify,
      title: "Chatify",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      githubLink: "https://github.com/yourgithub/chatify",
      liveLink: "https://yourwebsite.com/chatify",
    },
    {
      image: bitsOfCode,
      title: "Bits-0f-C0de",
      description:
        "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      githubLink: "https://github.com/yourgithub/bits-of-code",
      liveLink: "https://yourwebsite.com/bits-of-code",
    },
    // Agrega más objetos para cada proyecto
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Carousel>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <img className="" src={project.image} alt={project.title} />
              <div className="project-details text-center">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  <Button variant="primary" href={project.githubLink} target="_blank">
                    View on GitHub
                  </Button>{' '}
                  <Button variant="success" href={project.liveLink} target="_blank">
                    View Live
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
}

export default Projects;
