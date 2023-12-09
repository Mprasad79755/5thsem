import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const Cart = ({ cartItems, removeFromCart }) => {
  const [itemAddedToCart, setItemAddedToCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Check local storage for the item's added state for each product in the cart
    const storedItemAddedToCart = {};
    cartItems.forEach((item) => {
      const storedState = localStorage.getItem(`product_${item.id}_added`);
      storedItemAddedToCart[item.id] = storedState === 'true';
    });
    setItemAddedToCart(storedItemAddedToCart);

    // Calculate total
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total);
  }, [cartItems]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setItemAddedToCart((prev) => {
      const updatedState = { ...prev };
      updatedState[productId] = false;
      return updatedState;
    });

    // Remove the added state from local storage
    localStorage.removeItem(`product_${productId}_added`);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Header as="h5">Your Cart</Card.Header>
            {cartItems.length === 0 ? (
              <ListGroup variant="flush">
                <ListGroup.Item>Your cart is empty.</ListGroup.Item>
              </ListGroup>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <img src={item.img} alt={item.name} className="img-fluid" />
                      </Col>
                      <Col md={4}>
                        <p>{item.name}</p>
                      </Col>
                      <Col md={2}>
                        <p>${item.price}</p>
                      </Col>
                      <Col md={2}>
                        <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>
                          <FaTrash /> Remove
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Card>
        </Col>
        <Col md={4}>
          {cartItems.length > 0 && (
            <Card>
              <Card.Header as="h5">Order Summary</Card.Header>
              <Card.Body>
                <p>Total: ${cartTotal.toFixed(2)}</p>
                <Button variant="primary" size="lg" block>
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
