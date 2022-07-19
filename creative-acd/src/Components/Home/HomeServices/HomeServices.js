import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomeServices.css";
import program from "../../../images/program.gif";
import useServices from "../../../Hooks/useServices";
import HomeService from "../HomeService/HomeService";

const HomeServices = () => {
  const [services] = useServices();
  const fourServices = services.slice(0, 4);

  return (
    <div className="homeService__part">
      <Container>
        <div>
          <div className="title_container d-flex justify-content-center">
            <h2 className="title text-uppercase">Our Best Services</h2>
          </div>
          <Row className="g-3">
            <Col xl={5}>
              <img src={program} className="img-fluid" alt="" />
            </Col>
            <Col xl={7}>
              <Row xl={2} className="g-3">
                {fourServices.map((service) => (
                  <HomeService key={service.id} service={service}></HomeService>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomeServices;
