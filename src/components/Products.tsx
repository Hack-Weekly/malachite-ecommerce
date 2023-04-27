import React from "react";
import Product from "./Product";

const Products: React.FC = () => {

  
  
  return (
    <div className="products">
      <h1>New Auctions</h1>
      <div className="product_list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
