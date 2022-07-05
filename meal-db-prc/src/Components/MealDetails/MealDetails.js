import React from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Here is meal details.</h1>
    </div>
  );
};

export default MealDetails;
