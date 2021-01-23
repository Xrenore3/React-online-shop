import React from "react";
import styled from 'styled-components';

const ProductCart = ({product,addProductToCart}) => {
  console.log(product)
  const { id, type, title, image, description, price } = product;
  return (
    <Wrapper>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <ul>
        <li>{description}</li>
        <li>Price: {price}$</li>
      </ul>
      <div>
        <button>View</button>
        <button onClick={()=>addProductToCart(product)}>Add to cart</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  img {
    width:70%;
    margin: 0 15%  }
  
    padding:20px;
  
`

export default ProductCart;
