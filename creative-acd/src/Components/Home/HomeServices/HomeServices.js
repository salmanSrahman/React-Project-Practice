import React from "react";
import { Container } from "react-bootstrap";
import "./HomeServices.css";

const HomeServices = () => {
  return (
    <div className="homeService__part">
      <Container>
        <div>
          <div className="title_container d-flex justify-content-center">
          <h2 className="title text-uppercase">Our Best Services</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeServices;
