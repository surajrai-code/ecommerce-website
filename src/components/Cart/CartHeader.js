import React from "react";
import { Card } from "react-bootstrap";
function CartHeader() {
  return (
     
      <Card.Header>
        <h5
          style={{
            display: "inline-block",
            margin: "auto 205px auto 10px",
          }}
        >
          ITEM
        </h5>

        <h5 style={{ display: "inline-block", margin: "auto 25px auto 10px" }}>
          PRICE
        </h5>

        <h5 style={{ display: "inline-block", margin: "auto 10px auto 20px" }}>
          QUANTITY
        </h5>
        <hr></hr>
      </Card.Header>
    
  );
}

export default CartHeader;