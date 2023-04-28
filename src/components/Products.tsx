import React from "react";
import Product from "./Product";
import { products } from "../mockData";
import { ProductType } from "../types"

const Products: React.FC = () => {

  return (
    <div className="products">
      <h1>New Auctions</h1>
      <div className="product_list">
      {
          products.map( (product: ProductType) => <Product id={product.id} name={product.name} desc={product.desc} img={product.img} price={product.price} />)
        }
      </div>
    </div>
  );
};

export default Products;
