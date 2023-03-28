import React, { useContext } from "react";
import { Cart } from "../Cart/CartContext";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { productsArr } = useContext(Cart);

  const { id } = useParams(); //params in key, value pair we destrcuring and get key only

  //here array so, for finding that perticular image we use find

  let product = productsArr.find((value) => value.id === id);

  console.log(product);

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.itemImage}>
          <img src={product.imageUrl} alt="product-images" />

          <p>Insert image Block</p>
        </div>

        <div className={classes.itemDetails}>
          <h1>{product.title}</h1>

          <h3>Price: ${product.price} </h3>
          <span> 55% off</span>

          <div className={classes.itemReview}>
            <p className={classes.reviewtitle}>Reviews : </p>

            {product.ProductReview.map((e) => (
              <div className={classes.itemReview1}>
                <p>{e.name} - </p>

                <p>{e.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
