import React, { useState , useEffect } from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { FaShoppingCart, FaTrash } from 'react-icons/fa'; // Import the icons you want to use
import { useNavigate } from 'react-router-dom';

const Product = ({ data , addToCart, cartItems , removeFromCart}) => {
  const [itemAddedToCart, setItemAddedToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for the item's added state
    const storedItemAddedToCart = localStorage.getItem(`product_${data.id}_added`);
    setItemAddedToCart(storedItemAddedToCart === 'true');
  }, [data.id]);

  const handleAddToCart = () => {
    addToCart(data);
    setItemAddedToCart(true);
    localStorage.setItem(`product_${data.id}_added`, 'true');

  };
  const handleRemoveFromCart = () => {
    removeFromCart(data.id); // Assuming removeFromCart takes the product ID as an argument
    setItemAddedToCart(false);

    // Remove the added state from local storage
    localStorage.removeItem(`product_${data.id}_added`);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };


  return (
    <Col xs={6} sm={6} md={4} lg={3} className="mb-3">
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={data.img} alt={data.title} style={{ objectFit: 'cover', height: '150px' }} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
          <span style={{ color: data.quantity === 1 ? 'red' : 'inherit' }}>   Only {data.quantity} left.</span> 
          </Card.Text>
          <Card.Text>Price: ${data.price}</Card.Text>
          <Button
          variant="primary"
          size="sm"
          onClick={itemAddedToCart ? handleViewCart : handleAddToCart}
        >
          {itemAddedToCart ? <FaShoppingCart /> : 'Add to Cart'}
        </Button>

        {itemAddedToCart && (
          <Button
            variant="danger"
            size="sm"
            style={{ marginLeft: '5px' }}
            onClick={handleRemoveFromCart}
          >
            <FaTrash />
          </Button>
        )}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product