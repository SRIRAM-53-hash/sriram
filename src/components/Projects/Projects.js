import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import generator from "../../Assets/Projects/generator.png";
import AI from "../../Assets/Projects/AI.png";
import hygiene from "../../Assets/Projects/hygiene.png";
import todo from "../../Assets/Projects/todo.png";
import hand from "../../Assets/Projects/hand.png";
import tic from "../../Assets/Projects/tic.png";
import green from "../../Assets/Projects/green.png";


function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hygiene}
              isBlog={false}
              title="Hygiene Monitoring System "
              description="AI based system that monitors hygiene like cap,coat,boots in work area using our custom dataset and used by YOLO V5, if it detects it sents message and alarms ."
              ghLink="https://github.com/SRIRAM-53-hash/HYGINE_MONITOR"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={generator}
              isBlog={false}
              title="360 feedback generator for BIT collage"
              description="This project is developed for my collage that generates mark for the respective faculty . This project is made with MEAN stack ."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title="AI Voice assistance"
              description="A personal assistant powered by OpenAI's GPT model and Watson's Text-to-Speech & Speech-to-Text ,it give anything that we ask. It supports 10 unique voice . "
              ghLink="https://github.com/SRIRAM-53-hash/AI-voice-generator"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do-List"
              description="It remainders the users to do, a smart and simple thing ."
              ghLink="https://github.com/SRIRAM-53-hash/to-do-list"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hand}
              isBlog={false}
              title="AI hand tracking Car Game"
              description="A game that tracks our hand and moves the car , avoiding objects and counts the scores and fun."
              ghLink="https://github.com/SRIRAM-53-hash/Car-game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={green}
              isBlog={false}
              title="Green Screen Replacer"
              description="An AI green screen replacer that blurs our background in a live video using mediapipe and python."
              ghLink="https://github.com/SRIRAM-53-hash/Green-Screen-Replacer"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A nice game to play with computer in free time made in python and a little fun ."
              ghLink="https://github.com/SRIRAM-53-hash/Tic-Tac-Toe-py"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
