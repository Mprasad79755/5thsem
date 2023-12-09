import React from 'react'

import Product from './Product';
import { Container, Row } from 'react-bootstrap';

const Home = ({ products , addToCart , cartItems , removeFromCart}) => {

  return (
    <Container>
    <Row>
  {products.map((product) => (
    <Product key={product.id} data={product} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}/>
    ))}
    </Row>
    </Container>
  )
}

export default Home;