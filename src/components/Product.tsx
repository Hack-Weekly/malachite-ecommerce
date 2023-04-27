import React, { ChangeEvent, useState } from "react";
import placeholder from "../images/placeholder.webp";

const Product: React.FC = () => {
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
      <h3>Pikachu</h3>
      <h5>Will be useful in you adventure</h5>
      <img src={placeholder} alt="product" />
      <p>Current price: $999</p>
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
