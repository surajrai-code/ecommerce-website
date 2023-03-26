import { Card, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import Modal from "../UI/Modal";
import Classes from "./Cart.module.css";
import CloseButton from "./CloseButton";
import CartHeader from "./CartHeader";
import CartContext from "../Store/CartContext";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const [price, setPrice] = useState(0);
  const priceHandler = () => {
    let ans = 0;
    cartctx.items.map((item) => (ans = ans + item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    priceHandler();
  });
  const ITemRemoveHandler = (id) => {
    const arr = cartctx.items.filter((item) => item.title !== id);
    cartctx.removeItem(arr);
  };
  const IncreaseAndDecrease = cartctx.incAndDecFun ;
  return (
    <Modal>
      <div>
        <CloseButton onClose={props.onClosebutton}></CloseButton>
        <Card>
          <Card.Title style={{ textAlign: "center" }}>
            <h1>CART</h1>
          </Card.Title>
          <CartHeader />

          {cartctx.items.map((item) => (
            <div key={item.title}>
              <div>
                <div style={{ display: "inline-block" }}>
                  <Card className={Classes.card}>
                    <img src={item.imageUrl} alt="img" width="90px"></img>

                    <b>
                      <span className={Classes.title}>{item.title}</span>
                    </b>
                  </Card>
                </div>

                <b>
                  <span className={Classes.price}>{item.price}</span>

                  <span className={Classes.quantity}>{item.amount} </span>
                  <button  className={Classes.button} onClick={() => IncreaseAndDecrease(item, -1)}>
                    -
                  </button>
                  <button  className={Classes.button} onClick={() => IncreaseAndDecrease(item, +1)}>
                    +
                  </button>
                </b>
                <Button
                  className={Classes.removeButton}
                  onClick={() => ITemRemoveHandler(item.title)}
                  variant="danger"
                >
                  REMOVE
                </Button>
              </div>

              <hr></hr>
            </div>
          ))}
        </Card>
        <div style={{ margin: " 1rem auto auto 25rem ", textAlign: "center" }}>
          <span>
            <h5>TOTAL </h5>
            <span>{price}Rs.</span>
          </span>
        </div>
        <Button variant="info" style={{ margin: " 2rem auto auto 17rem " }}>
          PURCHASE
        </Button>
      </div>
    </Modal>
  );
};
export default Cart;