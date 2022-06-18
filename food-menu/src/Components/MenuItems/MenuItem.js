import React from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";

const MenuItem = ({ items }) => {
  return (
    <div>
      <Row md={3} className="g-3">
        {items.map((item) => (
          <Item item={item}></Item>
        ))}
      </Row>
    </div>
  );
};

export default MenuItem;
