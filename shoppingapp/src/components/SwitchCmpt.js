import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === '/';
  const isCartActive = location.pathname === '/cart';

  return (
    <Navbar  fixed="top" className="header-container d-flex justify-content-center align-items-center " style={{marginTop:"60px"}}>
      <Link to="/" className="mr-2">
        <Button variant={isHomeActive ? 'outline-danger' : 'outline-secondary'} className="rounded-pill">
          Home
        </Button>
      </Link>
      <Link to="/cart">
        <Button variant={isCartActive ? 'outline-danger' : 'outline-secondary'} className="rounded-pill btn ">
          Cart
        </Button>
      </Link>
    </Navbar>
  );
};

export default Header;
