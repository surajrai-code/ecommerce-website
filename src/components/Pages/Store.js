import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/CartContext";
import '../../App.css';


const Store = () => {
  const {productsArr, addToCart} = useContext(Cart);
  
  return (
    <div className="flex">
      {
      
      productsArr.map((item, index) => {
        return <div style={{width:'50%', paddingBottom: '5%' }}>
          <div className="product-item">   
          <h3>{item.title}</h3>
          
          <Link to={`/product/${item.id}`}>
            <div className="hover-image">
          <img src={item.imageUrl} alt={item.title} width="40%"  />
          </div>
          </Link>

          <p>Price: ${item.price}</p>
          
          <Button className="button"
          onClick={() => addToCart(item.id)}
          >Add to Cart</Button>
          </div>
         </div>
      })
      
      }
    </div>
  );
};

export default Store;