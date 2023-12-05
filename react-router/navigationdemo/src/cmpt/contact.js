import React from "react";

function Contact(){
return (
<>
<h1 style={{"color":"#2274A5","textAlign":"center"}}>Contact Us</h1>

<div style={{ display: 'block', justifyContent: 'center', textAlign:'center' }}>

<p>
        <strong>Govt CPC Polytechnic</strong>
      </p>
      <p>N R Mohalla</p>
      <p>Ashoka Road</p>
      <p>Mysore- 570007</p>
      <p>Phone No: 0821-2441444</p>
      <p>Email-Id: govtcpc108@gmail.com</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
</div>
<div style={{"textAlign":"center"}}>
<iframe
      style={{ border: '0' }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25475.188791045894!2d76.63395457519243!3d12.324193589083725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7068b435a859%3A0xa57d7f8d3988fc33!2sGovernment%20CPC%20Polytechnic!5e0!3m2!1sen!2sin!4v1651217355040!5m2!1sen!2sin"
      width="600"
      height="450"
      allowFullScreen=""
      title="Google Maps"
    />
    </div>
</>
    );
}

export default Contact;