import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Shop.css";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Toastify/Toastify";
import Modal from "react-bootstrap/Modal";
import check from "../../images/89540-green-check.gif";

const Shop = () => {
  const [tShirts, setTShirts] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  // modal show & close
  const handleClose = () => {
    setShow(false);
    setCart([]);
  };
  const handleShow = () => {
    setShow(true);
  };

  // product data load
  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTShirts(data));
  });

  // selected item add to cart
  const addToCart = (selectedTshirt) => {
    const exist = cart.find((tShirt) => tShirt._id === selectedTshirt._id);
    if (!exist) {
      const newCart = [...cart, selectedTshirt];
      setCart(newCart);
    } else {
      notify("This item already added");
    }
  };

  // selected item remove from cart
  const removeFromCart = (selectedTshirt) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedTshirt._id);
    setCart(rest);
  };

  return (
    <div>
      <Container>
        <Row className="g-5 py-5">
          <Col xl={8} xs={8}>
            <Row xl={3} xs={1} sm={2} className="g-3">
              {tShirts.map((tShirt) => (
                <TShirt
                  key={tShirt._id}
                  tShirt={tShirt}
                  addToCart={addToCart}
                ></TShirt>
              ))}
            </Row>
          </Col>
          <Col xl={4} xs={4}>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              handleShow={handleShow}
            ></Cart>
          </Col>
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          className="modal__container"
        >
          <Modal.Body>
            <img src={check} alt="" className="check__mark" />
            <div className="video__container"></div>
            <h5 className="fs-6 fw-bold">
              Congrats ! Your Order Is Under Check Out.
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Shop;
