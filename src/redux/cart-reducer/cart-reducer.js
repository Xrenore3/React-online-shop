const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';
const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT';
const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';


const initialState = {
    cart: [],
    total: 0,
    amount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const ifProductExist = state.cart.some(item => item.id === action.product.id);
            if (state.cart.length === 0 || !ifProductExist) {
                return { ...state, cart: [...state.cart, action.product] }
            }
            if (ifProductExist) {
                return {
                    ...state, cart: state.cart.map(item => {
                        return action.product.id === item.id ? { ...item, amount: item.amount + 1 } : item
                    })
                }
            }
        }
        case DELETE_ALL_PRODUCTS: {
            return { ...state, cart: [] }
        }
        case INCREASE_PRODUCT_COUNT: {
            return {
                ...state, cart: state.cart.map(item => {
                    if (item.id === action.id) {
                        return { ...item, amount: item.amount + 1 }
                    } else { return item }
                })
            }
        }
        case DECREASE_PRODUCT_COUNT: {
            return {
                ...state, cart: state.cart.map(item => {
                    if (item.id === action.id) {
                        return { ...item, amount: item.amount - 1 }
                    } else { return item }
                }).filter(item => item.amount !== 0)
            }
        }
        case REMOVE_PRODUCT: {
            return { ...state, cart: state.cart.filter(item => item.id !== action.id) }
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
export const deleteCartItems = () => ({
    type: DELETE_ALL_PRODUCTS
})

export const increaseProductCount = (id) => ({
    type: INCREASE_PRODUCT_COUNT,
    id
})
export const decreaseProductCount = (id) => ({
    type: DECREASE_PRODUCT_COUNT,
    id
})
export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
})

export default cartReducer
