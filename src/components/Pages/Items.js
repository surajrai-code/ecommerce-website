import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Store/CartContext";

import classes from "./Items.module.css";
import { Button, Card } from "react-bootstrap";

const Items = (props) => {
  const cartcxt = useContext(CartContext);

  return (
    <div>
      <div>
        {" "}
        <h1 className={classes.h1}>Shopping Bazar</h1>
      </div>

      <div className={classes.item} key={props.Item[0].title}>
        <Card style={{ width: "18rem", height: "15rem" }}>
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[0].title}
          </Card.Title>

          <Link to="/Store/color">
            {" "}
            <Card.Img src={props.Item[0].imageUrl} alt="colorimg" />
          </Link>

          <Card.Body>
            {props.Item[0].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[0],
                    amount: 1,
                    id: Math.random().toString(36),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>

      <div
        style={{
          color: "skyblue",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="secondary"
          style={{ color: "skyblue", textAlign: "center" }}
        >
          See the cart
        </Button>
      </div>
    </div>
  );
};
export default Items;
