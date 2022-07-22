import React from "react";
import "./Enroll.css";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import { Container, Row, Col } from "react-bootstrap";
import enroll from "../../../images/enroll.svg";

const Enroll = () => {
  const [services] = useServices();
  const { enrollId } = useParams();
  const enrollService = services.find(
    (service) => service.id === Number(enrollId)
  );
  console.log(enrollService);
  return (
    <div>
      <Container>
        <Row>
          <Col xl={6}>
            <img src={enroll} className="img-fluid" alt="" />
          </Col>
          <Col xl={6}>
            <div className="enroll__container">
              <h2 className="font__color">Congrats!</h2>
              <h4 className="text-secondary">
                You Enrolled In <span className="font__color">{enrollService?.title}</span> Course.
              </h4>
              <h4 className="text-secondary">
                <span className="font__color">{enrollService?.price}$</span> charged for this course.
              </h4>
              <h4 className="text-secondary">
                Soon we will contact you with your student account details.
                <span className="d-block">Thanks for being with us.</span>
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Enroll;
