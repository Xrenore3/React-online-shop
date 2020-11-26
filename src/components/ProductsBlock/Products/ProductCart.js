import React from "react";

const ProductCart = ({ id, type, title, image, description, price }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <ul>
        <li>{description}</li>
        <li>Price: {price}$</li>
        <li></li>
      </ul>
      <div>
        <button>View</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
