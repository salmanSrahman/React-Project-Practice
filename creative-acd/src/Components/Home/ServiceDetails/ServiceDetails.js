import React from "react";
import "./ServiceDetails.css";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import { Container, Row, Col, Button } from "react-bootstrap";

const ServiceDetails = () => {
  const [services] = useServices();
  console.log(services);
  const { serviceId } = useParams();
  const selectedService = services.find(
    (service) => service.id === Number(serviceId)
  );

  return (
    <div>
      <Container>
        <Row>
          <Col xl={5} className="mx-auto py-5">
            <div className="service__details">
              <img
                src={selectedService?.img}
                className="img-fluid mx-auto py-2 d-block"
                alt=""
              />
              <div className="py-2">
                <h4>{selectedService?.title}</h4>
                <p>{selectedService?.description}</p>
                <h5>${selectedService?.price}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <Button variant="outline-danger" size="sm">
                  See Details
                </Button>
                <Button variant="outline-primary" size="sm">
                  Enroll Now
                </Button>
              </div>
              <div className="serviceDetails__overlay1"></div>
              <div className="serviceDetails__overlay2"></div>
              <div className="serviceDetails__overlay3"></div>
              <div className="serviceDetails__overlay4"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
