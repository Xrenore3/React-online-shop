import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux';
import { deleteCartItems, increaseProductCount, decreaseProductCount, removeProduct } from '../../redux/cart-reducer/cart-reducer';

const CartContainer = ({ total, cart, deleteCartItems, increaseProductCount, decreaseProductCount, removeProduct }) => {
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem
            key={item.id}
            {...item}
            increaseProductCount={increaseProductCount}
            decreaseProductCount={decreaseProductCount}
            removeProduct={removeProduct} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>$ {total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={deleteCartItems}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartData.cart,
  total: state.cartData.total,
})

export default connect(mapStateToProps, {
  deleteCartItems,
  increaseProductCount,
  decreaseProductCount,
  removeProduct
})(CartContainer)
