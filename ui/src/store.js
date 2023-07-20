import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Assuming your cartReducer is responsible for managing the cart state
  },
});

export default store;
