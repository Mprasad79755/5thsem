import React, { useState , useEffect} from 'react';
import faker from 'faker';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import SwitchCmpt from './components/SwitchCmpt';





const ProductGenerator = () => {
  const randomImageId = faker.datatype.number({ min: 1, max: 1000 });

  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(),
    quantity: faker.datatype.number({ min: 1, max: 10 }),
    img: `https://picsum.photos/seed/${randomImageId}/100/100`,
  };
};



const GetProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push(ProductGenerator());
  }
  return products;
};

// const demoprod = [
//   {
//     id: '1',
//     name: 'Product A',
//     category: 'Electronics',
//     price: 499.99,
//     quantity: 5,
//     img: 'https://example.com/product-a.jpg',
//   },
// ]

function App(){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const initialProducts = GetProducts(15);
    // const initialProducts = demoprod;

    setProducts(initialProducts);
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
  
    if (existingItemIndex !== -1) {

      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
    
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };



  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };





  return (
    <>
    <BrowserRouter>
      <Header />
      <p style={{ marginBottom: '150px' }}></p>
      <SwitchCmpt/>
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/cart" element={<Cart products={products} cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>

    </BrowserRouter>
    </>
  );
}
export default App;