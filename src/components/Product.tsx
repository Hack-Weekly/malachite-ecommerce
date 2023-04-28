import React, { ChangeEvent, useState } from "react";
import { ProductType } from "../types";

const Product: React.FC<ProductType> = (product: ProductType) => {

  const [price, setPrice] = useState<number | "">("");
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);

    if (!isNaN(numericValue)) {
      setPrice(numericValue);
    } else {
      setPrice("");
    }
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <h5>{product.desc}</h5>
      <img src={product.img} alt="product" />
      <p>Current price: ${product.price}</p>
      <p> Your auction</p>
      <input
        id="priceInput"
        type="number"
        step="0.01"
        min="0"
        value={price === "" ? "" : price.toFixed(2)}
        onChange={handleChange}
      />
    </div>
  );
};

export default Product;
