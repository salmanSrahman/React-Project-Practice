import React from "react";
import { Col, Button } from "react-bootstrap";
import "./HomeService.css";

const HomeService = ({ service }) => {
  const { img, title, price } = service;
  return (
    <Col>
      <div className="homeService__details">
        <div>
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="py-2">
          <h4>{title}</h4>
          <h5>${price}</h5>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant="outline-danger" size="sm">
            See Details
          </Button>
          <Button variant="outline-primary" size="sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default HomeService;
