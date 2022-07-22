import React from "react";
import "./Enroll.css";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import enroll from "../../../images/enroll.svg";

const Enroll = () => {
  const [services] = useServices();
  const { enrollId } = useParams();
  const enrollService = services.find(
    (service) => service.id === Number(enrollId)
  );
  console.log(enrollService);
  return (
    <div className="enroll__part">
      <Container>
        <Row className="g-3">
          <Col md={5}>
            <img src={enroll} className="img-fluid" alt="" />
          </Col>
          {enrollService?.title ? (
            <Col md={7} className="d-flex align-items-center">
              <div className="enroll__container">
                <h2 className="font__color">Congrats!</h2>
                <h4 className="text-secondary">
                  You Enrolled In{" "}
                  <span className="font__color">{enrollService?.title}</span>{" "}
                  Course.
                </h4>
                <h4 className="text-secondary">
                  <span className="font__color">{enrollService?.price}$</span>{" "}
                  charged for this course.
                </h4>
                <h4 className="text-secondary">
                  Soon we will contact you with your student account details.
                  <span className="d-block">Thanks for being with us.</span>
                </h4>
                <div className="enroll__overlay1"></div>
                <div className="enroll__overlay2"></div>
                <div className="enroll__overlay3"></div>
                <div className="enroll__overlay4"></div>
              </div>
            </Col>
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
        </Row>
      </Container>
    </div>
  );
};

export default Enroll;
