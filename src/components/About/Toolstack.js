import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaGithub } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos, 
  SiAdobecreativecloud,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaWindows />
      <h4>Windows</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      <h4>Github</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobecreativecloud />
      <h4>Creative Cloud</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h4>Vercel</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
