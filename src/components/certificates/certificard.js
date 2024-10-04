import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Certificard(props) {
  const [isExpanded, setIsExpanded] = useState(false); // State to track expansion

  const handleClick = () => {
    setIsExpanded(!isExpanded); // Toggle expansion
  };

  return (
    <Card className={`project-card-view ${isExpanded ? "expanded" : ""}`} onClick={handleClick}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {isExpanded && (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description || "More detailed information about the certificate."}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default Certificard;
