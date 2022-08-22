import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import Img from './fgg.jpg'
import Image from "react-bootstrap/Image";
  
 function sample() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>React-Bootstrap Image Component</h4>
      <Image
        src={Img}
        rounded
      />
      <Image
        src={Img}
        roundedCircle
      />
    </div>
  );
}
export default sample