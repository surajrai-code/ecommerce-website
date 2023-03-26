import { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";
const CartButton = (props) => {
  const cartctx = useContext(CartContext);

  const quantity = cartctx.totalAmount;
  return (
    <Fragment>
      <Button
        onClick={props.onButtonpass}
        variant="dark"
        style={{ border: "1px solid skyblue" }}
        type="click"
      >
        Cart {quantity}
      </Button>
    </Fragment>
  );
};
export default CartButton;
