import Items from "../Pages/Items";

import CartProvider from "./CartProvider";

function ProductList() {
  
  const productsArr = [
    {
      title: "White Shirt",

      price: 339,

      imageUrl:
        "https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/0c627ee5fb9dc2ff52686dd232ca9539ae5749e8/public/product1of1.jpg",
    },

    {
      title: "blue and white Shirt",

      price: 500,

      imageUrl:
        " https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/e72ffd882a1145ba9cefa1040220faaa8aed2578/src/assets/productimage/product2of1.jpg",
    },

    {
      title: " white and Black top",

      price: 700,

      imageUrl:
        "  https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/4fdd28af379f9bdab9b71badb2b3c4ef351ada25/prod3of1.jpg",
    },

    {
      title: "Black Skirt",

      price: 900,

      imageUrl:
        " https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/e72ffd882a1145ba9cefa1040220faaa8aed2578/src/assets/productimage/product4of1.jpg",
    },
  ];

  
 
  return (
    <div>
      <CartProvider>
       
        
        <Items Item={productsArr}> </Items>
        
      </CartProvider>
    </div>
  );
}

export default ProductList;
