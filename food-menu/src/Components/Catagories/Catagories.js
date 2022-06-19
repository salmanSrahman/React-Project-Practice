import React from "react";
import { Button } from "react-bootstrap";

const Catagories = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <Button
          key={index}
          className="ms-2 my-5"
          onClick={() => filterItems(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Catagories;
