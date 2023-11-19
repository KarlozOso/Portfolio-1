import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaFigma,
  FaHtml5,
  FaCss3Alt,
 } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import {
  SiRedis,
  SiAdobelightroom,
  SiFirebase,
  SiNextdotjs,
  SiAdobepremierepro,
  SiPostgresql,
  SiCanva,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiPhotoshop />
      <h4>Photoshop</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiIllustrator />
      <h4>Illustrator</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobelightroom />
      <h4>Lightroom</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobepremierepro />
      <h4>Premiere Pro</h4>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaFigma />
      <h4>Figma</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCanva />
    <h4>Canva</h4>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      <h4>HTML</h4>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaCss3Alt />
      <h4>CSS</h4>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      <h4>Javascript</h4>
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
