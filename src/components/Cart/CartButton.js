import { Fragment } from "react";
import { Button } from "react-bootstrap";
const CartButton = (props) => {
  return (
    <Fragment>
      <Button
        onClick={props.onButtonpass}
        variant="dark"
        style={{ border: "1px solid skyblue" }}
        type="click"
      >
        Cart 0
      </Button>
    </Fragment>
  );
};
export default CartButton;
