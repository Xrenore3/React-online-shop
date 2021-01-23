const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT';
const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT';


const initialState = {
    cart: [],
    total: 0,
    amount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state, cart: [...state.cart, action.product]
            }

        }
        default: {
            return state
        }
    }
}

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT,
    product
})

export default cartReducer
