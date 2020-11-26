import React from "react";
import ProductCart from "./ProductCart";
const ProductList = ({ products }) => {
  const productList = products.map((product) => {
    const { id, type, title, image, description, price } = product;
    return (
      <ProductCart
        key={id}
        id={id}
        type={type}
        title={title}
        image={image}
        description={description}
        price={price}
      />
    );
  });
  return (
    <div>
      <article>{productList}</article>
    </div>
  );
};



export default ProductList
