import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certificard from "../certificates/certificard.js"; // Correct import
import Particle from "../Particle";
import aa from "../../Assets/certifiimage/aa.png";
import bb from "../../Assets/certifiimage/bb.png";
import cc from "../../Assets/certifiimage/cc.png";
import dd from "../../Assets/certifiimage/dd.png";
import ee from "../../Assets/certifiimage/ee.jpg";
import ff from "../../Assets/certifiimage/ff.jpg";
import gg from "../../Assets/certifiimage/gg.jpg";

function certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>I have learnt more things from these courses.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <Certificard
              imgPath={ee}
              isBlog={false}
              title="Smart India Hackathon 2023 Winner 🏆"
              description="Created industrial based hygiene monitor system."
            />
          </Col>
          <Col md={4} className="project-card">
            <Certificard
              imgPath={ff}
              isBlog={false}
              title="Project War 🏆"
              description="Hidden Cost Identifer and Dark Pattern Detection."
            />
          </Col>
          <Col md={4} className="project-card">
            <Certificard
              imgPath={gg}
              isBlog={false}
              title="Paper War 🥈"
              description="Hidden Cost Identifer and Dark Pattern Detection."
            />
          </Col>
          <Col md={4} className="project-card">
            <Certificard
              imgPath={aa}
              isBlog={false}
              title="AWS for Beginners"
              description="Introduction to cloud services using AWS."
            />
          </Col>
          <Col md={4} className="project-card">
            <Certificard
              imgPath={bb}
              isBlog={false}
              title="Python Programming - Part 1"
              description="Learn the basics of Python programming."
            />
          </Col>
          <Col md={4} className="project-card">
            <Certificard
              imgPath={cc}
              isBlog={false}
              title="Python Programming - Part 2"
              description="Intermediate level Python programming."
            />
          </Col>
          <Col md={4} className="project-card">
            <Certificard
              imgPath={dd}
              isBlog={false}
              title="Python for Data Science"
              description="Using Python in data science applications."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default certificates;
