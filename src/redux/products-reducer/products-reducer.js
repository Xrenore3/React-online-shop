import products from "../../data/products.js";

const SORT_BY_TYPE = "SORT_BY_TYPE";
const ADD_ALL_TYPES = "ADD_ALL_TYPES";

const initialState = { products, allTypes: [] };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_TYPE: {
      if (action.boilerType === "all") {
        return { ...state, products: products };
      } else {
        return {
          ...state,
          products: products.filter(product => product.type === action.boilerType),
        };
      }
    }
    case ADD_ALL_TYPES: {
      return {
        ...state,
        allTypes: [
          "all",
          ...new Set(state.products.map((product) => product.type)),
        ],
      };
    }
    default:
      return state;
  }
};

export const sorteByType = (boilerType) => ({
  type: SORT_BY_TYPE,
  boilerType,
});
export const addAllTypes = () => ({
  type: ADD_ALL_TYPES,
});

export default productsReducer;
