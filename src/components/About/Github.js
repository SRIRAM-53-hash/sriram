import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
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
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a href="https://leetcode.com/user5520nJ?ext=heatmap" target="_blank" rel="noopener noreferrer">
          LeetCode Profile
        </a>
      </div>
    </Row>
  );
}

export default Github;
