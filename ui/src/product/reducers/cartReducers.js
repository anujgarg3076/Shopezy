// src/reducers/cartReducer.js

const initialState = {
    cartItems: [],
    itemCount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'UPDATE_ITEM_COUNT':
        return {
          ...state,
          itemCount: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  