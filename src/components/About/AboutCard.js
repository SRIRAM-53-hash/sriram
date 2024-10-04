import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SRIRAM S </span>
            from <span className="purple"> Dindigul, Tamil Nadu .</span>
            <br />
            I am currently studying B.Tech Information Technology, in Bannari Amman Institute Of Technology, Sathy.
            I am a tech enthusiast with a passion for developing innovative solutions and problem solving. As a dedicated lifelong learner, I continuously seek new challenges and opportunities to broaden my knowledge and skills in IT. I
enjoy simplifying complex technical concepts and using technology to solve
real-world problems.
            <br />
            How to reach me 🤔:<br/>
            📧:sriramsivakumar2005@gmail.com<br/>
            📞:6383486227
            <br />
            <br />
            Apart from coding, some other extra-curricular activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> NCC
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe Yourself!"{" "}
          </p>
          <footer className="blockquote-footer">SRIRAM S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
