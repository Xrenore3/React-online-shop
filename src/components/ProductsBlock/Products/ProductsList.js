import React from "react";
import ProductCart from "./ProductCart";
import styled from 'styled-components';

const ProductList = ({ products,addProductToCart }) => {
  const productList = products.map((product) => {
    const { id } = product;
    return (
      <ProductCart
        key={id}
        product={product}
        addProductToCart={addProductToCart}
      />
    );
  });
  return (
    <Wrapper>
      {productList}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3,1fr)
`



export default ProductList
