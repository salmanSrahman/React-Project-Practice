import React from "react";
import "./ManageInventory.css";
import checkOut from "../../images/checkout.gif";

const ManageInventory = () => {
  return (
    <div>
      <div>
        <img src={checkOut} className="d-block mx-auto" alt="" />
      </div>
    </div>
  );
};

export default ManageInventory;
