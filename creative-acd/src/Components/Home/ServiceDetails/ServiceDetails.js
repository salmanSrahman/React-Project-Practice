import React from "react";
import "./ServiceDetails.css";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";


const ServiceDetails = () => {
  const [services] = useServices();
  console.log(services);
  const { serviceId } = useParams();
  const selectedService = services.find(
    (service) => service.id === Number(serviceId)
  );
  console.log(selectedService);

  return (
    <div>
      <Container>
        
      </Container>
      <h4 className="text-color">{selectedService?.title}</h4>
    </div>
  );
};

export default ServiceDetails;
