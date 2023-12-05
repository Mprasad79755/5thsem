import React from "react";

function Branch(){
return (
<>

<h1 style={{"color":"#2274A5","textAlign":"center"}}>Branches</h1>
<div style={{ display: 'flex', justifyContent: 'center' }}>
<ul style={{  padding: "0px",marginLeft:"200px", fontSize:'20px' , fontWeight:'bold' }}>
    <li>AutoMobile Engineering</li>
    <li>Civil Engineering</li>
    <li>Computer Science & Engineering</li>
    <li>Commercial Practice</li>
    <li>Electrical & Electronics Engineering</li>
    <li>Electronics & Communication Engineering</li>
    <li>Mechanical Engineering</li>
</ul>
</div>
</>
    );
}

export default Branch;