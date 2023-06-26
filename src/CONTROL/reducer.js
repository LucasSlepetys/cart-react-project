import {
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
  REMOVE_ITEM,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === INCREASE_AMOUNT) {
    const newCart = [];
    state.cart.forEach((item) => {
      if (item.id === action.payload.id) {
        newCart.push({ ...item, amount: item.amount + 1 });
        return;
      }
      newCart.push(item);
    });
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE_AMOUNT) {
    const newCart = [];
    state.cart.forEach((item) => {
      if (item.id === action.payload.id) {
        if (item.amount - 1 <= 0) {
          return;
        }
        newCart.push({ ...item, amount: item.amount - 1 });
        return;
      }
      newCart.push(item);
    });
    return { ...state, cart: newCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    return { ...state, cart: action.payload.cart, loading: false };
  }

  throw new Error(`No matching "${action.type} - action type`);
};

export default reducer;
