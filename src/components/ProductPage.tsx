/** @format */

import React, { useEffect, useState } from "react";
import { products } from "../mockData";
import { ProductType } from "../types";

const ProductPage: React.FC = () => {
  const id = document.location.pathname.split("/")[2];
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    products.forEach((ele) => {
      ele.id === id && setProduct(ele);
    });
  }, []);

  return (
    <div className='flex flex-col w-[60%] pt-[25px] m-auto'>
      <h1 className='mr-auto w-fit pl-3 text-malachite-green'>
        {product && product.name}
      </h1>
      <div className=' flex justify-center align-middle w-full'>
        <img className='w-[50%] pr-[20px] aspect-square' src={product?.img} />
        <div>
          <h1>Highest Bidder: ${product?.price}</h1>
          <div className="mr-auto ">
            <div>
              Time left
            </div>
            <h2 className="w-fit">Bidding List</h2>
            <div className='border-b border-b-[#E0E0E0] flex'>
              <div>
                <h3>UserName1</h3>
                <p>10:00</p>
              </div>
              <h5 className="mt-auto mb-auto ml-auto font-[700] text-malachite-dark">$200</h5>
            </div>
            <div className='border-b border-b-[#E0E0E0] flex'>
              <div>
                <h3>UserName1</h3>
                <p>10:00</p>
              </div>
              <h5 className="mt-auto mb-auto ml-auto text-malachite-dark font-[700]">$200</h5>
            </div>
            <div className='border-b border-b-[#E0E0E0]  flex'>
              <div>
                <h3>UserName1</h3>
                <p>10:00</p>
              </div>
              <h5 className="mt-auto mb-auto ml-auto text-malachite-dark font-[700]">$200</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
