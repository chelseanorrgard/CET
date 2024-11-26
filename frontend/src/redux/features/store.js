import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import roomApi from './rooms/roomApi';
import ordersApi from './orders/ordersApi'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(roomApi.middleware,ordersApi.middleware),
})