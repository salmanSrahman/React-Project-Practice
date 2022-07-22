import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="service__part">
      <Container>
        <div className="title_container d-flex justify-content-center">
          <h2 className="title text-uppercase">Our All Services</h2>
        </div>
        <div className="mt-5">
          {services.length ? (
            <Row xl={3} lg={2} sm={2} xs={1} className="g-3">
              {services.map((service) => (
                <Service service={service} key={service.id}></Service>
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
        </div>
      </Container>
    </div>
  );
};

export default Services;
