import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deletefromcart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    payload: { productId }, 
  };
};
