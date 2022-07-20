import React from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";
import slider1 from "../../../images/slider1.png";
import slider2 from "../../../images/slider2.png";
import slider3 from "../../../images/slider3.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Carousel variant="dark" className="banner__container">
        <Carousel.Item>
          <Container>
            <Row className="g-3">
              <Col xl={7} className="d-flex align-items-center">
                <div className="banner__text">
                  <h1>
                    Development
                    <span className="d-block">Is Our Goal</span>
                    <span className="d-block">Ever</span>
                  </h1>
                  <p className="py-2">
                    We are a boutique digital transformation consultancy and
                    software development company.
                  </p>
                  <Button
                    size="lg"
                    variant="danger"
                    onClick={() => navigate("/services")}
                  >
                    Get Started
                  </Button>
                </div>
              </Col>
              <Col xl={5}>
                <div className="banner__img">
                  <img src={slider1} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="g-3">
              <Col xl={7} className="d-flex align-items-center">
                <div className="banner__text">
                  <h1>
                    Development
                    <span className="d-block">Is Our Goal</span>
                    <span className="d-block">Ever</span>
                  </h1>
                  <p className="py-2">
                    We are a boutique digital transformation consultancy and
                    software development company.
                  </p>
                  <Button
                    size="lg"
                    variant="danger"
                    onClick={() => navigate("/services")}
                  >
                    Get Started
                  </Button>
                </div>
              </Col>
              <Col xl={5}>
                <div className="banner__img">
                  <img src={slider2} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="g-3">
              <Col xl={7} className="d-flex align-items-center">
                <div className="banner__text">
                  <h1>
                    Development
                    <span className="d-block">Is Our Goal</span>
                    <span className="d-block">Ever</span>
                  </h1>
                  <p className="py-2">
                    We are a boutique digital transformation consultancy and
                    software development company.
                  </p>
                  <Button
                    size="lg"
                    variant="danger"
                    onClick={() => navigate("/services")}
                  >
                    Get Started
                  </Button>
                </div>
              </Col>
              <Col xl={5}>
                <div className="banner__img">
                  <img src={slider3} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
