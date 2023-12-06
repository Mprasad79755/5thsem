import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 10.00, category: 'Electronics', image: 'https://via.placeholder.com/200x150' },
  { id: 2, name: 'Product 2', price: 15.00, category: 'Clothing', image: 'https://via.placeholder.com/200x150' },
  { id: 3, name: 'Product 3', price: 20.00, category: 'Home Goods', image: 'https://via.placeholder.com/200x150' },
  { id: 4, name: 'Product 4', price: 25.00, category: 'Electronics', image: 'https://via.placeholder.com/200x150' },
  { id: 5, name: 'Product 5', price: 30.00, category: 'Clothing', image: 'https://via.placeholder.com/200x150' },
  { id: 6, name: 'Product 6', price: 35.00, category: 'Home Goods', image: 'https://via.placeholder.com/200x150' },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      setCartItems([...cartItems, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const filteredCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filteredCartItems);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => subtotal += item.price * item.quantity);
    return subtotal;
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <p className="cart-subtotal">Subtotal: ${calculateSubtotal().toFixed(2)}</p>
      <button className="cart-checkout-button">Checkout</button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to our Online Store</h1>
      <p>Browse our wide selection of products and add them to your cart.</p>
      <div className="product-categories">
        <Link to="/electronics">Electronics</Link>
        <Link to="/clothing">Clothing</Link>
        <Link to="/home-goods">Home Goods</Link>
      </div>
    </div>
  );
};

const Products = ({ category }) => {
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="products-container">
      <h2>{category} Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-item-image" />
            <div className="product-item-details">
              <h4>{product.name}</h4>
              <p>Price: ${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/clothing">Clothing</Link>
          <Link to="/home-goods">Home Goods</Link>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/electronics" component={Products} />
          <Route path="/clothing" component={Products} />
          <Route path="/home-goods" component={Products} />
          <Route path="/cart" component={Cart} />
</Switch>
</div>
</Router>
  );}