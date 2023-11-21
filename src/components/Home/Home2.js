import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,
   FaFlickr, 
  } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a Graphic Designer, my passion for video and photography sparked during my childhood while watching Michael Jackson's 'Thriller.' This fascination grew as I matured, leading me to explore the profound impact of graphics on society.
              <br />
              <br />I have expertise in various technologies such as 
              <i>
                <b className="purple"> Adobe Creative Suite (Photoshop, Illustrator, Premiere, Lightroom), Figma, Canva, HTML, CSS, JavaScript, and React. </b>
              </i>
              <br />
              <br />
              My passions revolve around <i><b class='purple'>creating eye-catching visuals</b></i>, ranging from social media posts to <i><b class='purple'>web design</b></i>
              <br />
              <br />
              I hold immense passion for the tech industry, spanning from smartphones to emerging software, video games, sports, and entertainment. Drawing from my background in sales, I leverage this experience to enhance my designs, thereby significantly elevating the <i><b class='purple'>User Experience</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KarlozOso"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/carlos-hernandez-espina-4a9a08153/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.flickr.com/photos/karlozoso/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                <FaFlickr />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
