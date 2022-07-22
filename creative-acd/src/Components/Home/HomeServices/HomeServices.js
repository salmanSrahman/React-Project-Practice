import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./HomeServices.css";
import program from "../../../images/program.gif";
import HomeService from "../HomeService/HomeService";
import useServices from "../../../Hooks/useServices";

const HomeServices = () => {
  const [services] = useServices();
  const fourServices = services.slice(0, 4);

  return (
    <div className="homeService__part">
      <Container>
        <div className="title_container d-flex justify-content-center">
          <h2 className="title text-uppercase">Our Best Services</h2>
        </div>
        <div className="mt-5">
          <Row className="g-3">
            <Col xl={5} className="d-flex align-items-center">
              <img src={program} className="img-fluid" alt="" />
            </Col>
            <Col xl={7}>
              {services.length ? (
                <Row xl={2} className="g-3">
                  {fourServices.map((service) => (
                    <HomeService
                      key={service.id}
                      service={service}
                    ></HomeService>
                  ))}
                </Row>
              ) : (
                <div className="mt-5 pt-5">
                  <Spinner
                    animation="grow"
                    variant="danger"
                    className="mx-auto d-block mt-5"
                  />
                  <h6 className="text-center py-2 text-danger">Loading.....</h6>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomeServices;
