import React from "react";
import styled from 'styled-components'
const CartItem = () => {
  return (
    <Wrapper>
      <article className="cart-item">
        <img src='' alt='title' />
        <div>
          <h4>title</h4>
          <h4 className="item-price">$price</h4>
          {/* remove button */}
          <button className="remove-btn" onClick={() => { }}>
            remove
        </button>
        </div>
        <div>
          {/* increase amount */}
          <button className="amount-btn" onClick={() => { }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          {/* amount */}
          <p className="amount">amount</p>
          {/* decrease amount */}
          <button className="amount-btn" onClick={() => { }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
:root {
  --clr-primary: #2680c0;
  --clr-primary-dark: hsl(205, 100%, 21%);
  --clr-primary-light: hsl(205, 84%, 74%);
  --clr-grey-1: #102a42;
  --clr-grey-5: #617d98;
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.25rem;
  --large-screen-width: 1170px;
  --small-screen-width: 90vw;
  --fixed-width: 50rem;
}
.cart-item {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
}
.cart-item img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
}
.cart-item h4 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 2px;
}
.item-price {
  color: var(--clr-grey-5);
}
.remove-btn {
  color: var(--clr-primary);
  letter-spacing: var(--spacing);
  cursor: pointer;
  font-size: 0.85rem;
  background: transparent;
  border: none;
  margin-top: 0.375rem;
  transition: var(--transition);
}
.remove-btn:hover {
  color: var(--clr-primary-light);
}
.amount-btn {
  width: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
}
.amount-btn svg {
  fill: var(--clr-primary);
}
.amount-btn:hover svg {
  fill: var(--clr-primary-light);
}
.amount {
  text-align: center;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 1;
}
hr {
  background: var(--clr-grey-5);
  border-color: transparent;
  border-width: 0.25px;
}
`

export default CartItem;
