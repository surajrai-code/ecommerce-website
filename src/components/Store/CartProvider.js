import { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const addItemToCartHandler = (item, index) => {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.title === product.title) {
        isPresent = true;
      }
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };
  const  IncreaseAndDecrease = (item,d) => {
    let ind = -1;
    cart.forEach((data,index)=>{
        if(data.title===item.title){
            ind =index
        }
    })
    const tempArr = cart;
    tempArr[ind].amount = Number(tempArr[ind].amount) + d;
    if(tempArr[ind].amount===0){
        tempArr[ind].amount =1;
    }
    setCart([...tempArr])
  };

  const cartcontext = {
    items: cart,
    incAndDecFun :IncreaseAndDecrease,
    totalAmount: cart.length,
    addItem: addItemToCartHandler,
    removeItem: setCart,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;