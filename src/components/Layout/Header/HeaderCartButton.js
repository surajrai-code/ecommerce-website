import { Fragment, useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
import LoginContext from "../../Store/LoginContext";
import { useNavigate } from "react-router-dom";

const HeaderCartButton = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const authCtx = useContext(LoginContext);

  useEffect(() => {
    setQuantity(cartCtx?.items?.length || 0);
  }, [cartCtx.items]);

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/Login");
  };

  return (
    <Fragment>
      <button onClick={props.onClick} className={classes.button}>
        <span>Cart</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
      <button onClick={logoutHandler} className={classes.logoutButton}>
        {" "}
        Logout{" "}
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;