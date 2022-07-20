import React from "react";
import "./About.css";
import about from "../../images/about.png";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="about__part">
      <Container>
        <Row className="g-4">
          <Col>
            <img src={about} className="img-fluid" alt="" />
          </Col>
          <Col>
            <div>
              <h2>
                <span className="font__color text-uppercase">Creative Academy</span> is one of
                the Biggest Online Learning Platform of Bangladesh.
              </h2>
              <p className="text-secondary lh-base fs-5 py-2">
                Here you can get the best teachers of Bangladesh. You can choose
                your week subject and join that class. In Aimers, you can not
                only attend the classed. You have to give some exam according to
                your enrolled subject or lesson. You can also watch your
                favourite teacher's class here. You can take preparation of
                Admission, HSC, SSC etc.
              </p>
              <Button variant="danger">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
