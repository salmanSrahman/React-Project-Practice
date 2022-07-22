import React from "react";
import { Col, Button } from "react-bootstrap";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { img, title, price, id } = service;

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
          <Link to={`/service/${id}`}>
            <Button variant="outline-danger" size="sm">
              See Details
            </Button>
          </Link>
          <Link to={`/enroll/${id}`}>
            <Button variant="outline-primary" size="sm">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Service;
