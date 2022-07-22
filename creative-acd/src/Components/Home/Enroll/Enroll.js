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
            <div>
              <h2 className="font__color">Congrats!</h2>
              <h3>
                You Enrolled In <span>{enrollService?.title}</span> Course.
              </h3>
              <h3>
                <span>{enrollService?.price}$</span>charged for this course.
              </h3>
              <h3>
                Soon we will contact you with your student account details.
                <span className="d-block">Thanks for being with us.</span>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Enroll;
