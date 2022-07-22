import React from "react";
import "./ServiceDetails.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import { Container, Row, Col, Button } from "react-bootstrap";

const ServiceDetails = () => {
  const [services] = useServices();
  const { serviceId } = useParams();
  const selectedService = services.find(
    (service) => service.title === serviceId
  );

  const navigate = useNavigate();

  return (
    <div className="serviceDetails__part">
      <Container>
        <div className="title_container d-flex justify-content-center">
          <h4 className="title text-uppercase">
            {selectedService?.title} Course Details
          </h4>
        </div>
        <Row>
          <Col xl={5} className="mx-auto pt-4">
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
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => navigate("/services")}
                >
                  All Services
                </Button>
                <Link to={`/enroll/${selectedService?.id}`}>
                  <Button variant="outline-primary" size="sm" className="ms-1">
                    Enroll Now
                  </Button>
                </Link>
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
