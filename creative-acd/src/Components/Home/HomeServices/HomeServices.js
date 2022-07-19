import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomeServices.css";
import services from "../../../images/program.gif";

const HomeServices = () => {

  return (
    <div className="homeService__part">
      <Container>
        <div>
          <div className="title_container d-flex justify-content-center">
            <h2 className="title text-uppercase">Our Best Services</h2>
          </div>
          <Row>
            <Col xl={5}>
              <img src={services} className="img-fluid" alt="" />
            </Col>
            <Col xl={7}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomeServices;
