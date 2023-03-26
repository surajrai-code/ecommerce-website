import React from "react";
import classes from "./FirstDetails.module.css";
import ReactImageMagnify from "react-image-magnify";
import Image1 from "./components/assets/shirt.jpg";
import Image1200 from "./components/assets/shirtback.jpg";
 
function FirstDetails() {
  return (
    <div>
      <div>
        <div className={classes.img} >
          <div style={{ width: "300px", height: "300px" ,display:'inline-block' }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: Image1,
                },
                largeImage: {
                  src: Image1200,
                  width: 800,
                  height: 1200,
                },
              }}
            /> </div>
            

          <ul>
            {" "}
            <h6>Smartees</h6>
            <div>
              <h6>Men Full Sleeve Printed Hooded Sweatshirt</h6>
            </div>
            <p style={{ color: "green" }}>
              {" "}
              <small>Special price</small>
            </p>
            <small>
              <del>₹1,499</del> <sapn style={{ color: "green" }}> 77% off</sapn>
            </small>{" "}
            <h5>₹339 </h5>
            <p>
              {" "}
              <span className={classes.star}>
                4 <span className={classes.starin}>*</span>
              </span>{" "}
              15,779 ratings and 1,720 reviews
            </p>
          </ul>
        </div>

        <div>
          <p>Available offers</p>
          <span>
            <ul>
              <li>Special Price Get at flat ₹339 T&C</li>
              <li>
                Partner OfferPurchase now & get a surprise cashback coupon for
                January / February 2023 Know More
              </li>

              <li>
                Partner OfferSign up for Flipkart Pay Later and get Flipkart
                Gift Card worth up to ₹500* Know More
              </li>
              <li>
                {" "}
                Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order
                Value ₹1000. Valid once per Paytm account T&C
              </li>
            </ul>
          </span>
        </div>

        <div className={classes.img}>
          <ul>
            <h3>Ratings & Reviews</h3>
            <span>
              <p>
                {" "}
                <span className={classes.star}>
                  4 <span className={classes.starin}>*</span>
                </span>{" "}
                Love it 💕
                <div>Ritu Pragyan Jan, 2022</div>
                Certified Buyer, Bhubaneswar
              </p>

              <p>
                {" "}
                <span className={classes.star}>
                  5 <span className={classes.starin}>*</span>
                </span>{" "}
                Very very good
                <div>Chaitali Saha Jan, 2021</div>
                Certified Buyer, Maldah District
              </p>

              <p>
                {" "}
                <span className={classes.star}>
                  3 <span className={classes.starin}>*</span>
                </span>{" "}
                Nice
                <div>Sarfarz Ashraf Jan, 2021</div>
                Certified Buyer, Bengaluru
              </p>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FirstDetails;