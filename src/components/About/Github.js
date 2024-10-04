import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <>
      {/* GitHub Calendar Section */}
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="SRIRAM-53-hash"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      {/* LeetCode Status Section */}
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={12}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            LeetCode <strong className="purple">Days</strong>
          </h1>
          <a
            href="https://leetcode.com/user5520nJ?ext=heatmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://leetcard.jacoblin.cool/user5520nJ"
              alt="LeetCode Stats"
              style={{
                borderRadius: "10px",
                border: "1px solid #ddd",
                width: "100%",
                maxWidth: "600px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>
        </Col>
      </Row>
    </>
  );
}

export default Github;
