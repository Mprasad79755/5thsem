import React from "react";
import { Link } from "react-router-dom";


function Layout(){
    return(
        <>
          <div className="app-name">
            <img src={require('./logo.png')} style={{"width":"auto"}}></img>
        <h2>Government CPC Polytechnic</h2>
      </div>
<nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/activities" className="nav-link">Activities</Link>
        <Link to="/branches" className="nav-link">Branches</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
</>
    );
}

export default Layout;