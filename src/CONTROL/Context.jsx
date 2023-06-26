import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { getTotals } from '../utils';
import { DISPLAY_ITEMS, LOADING } from './actions';
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const GlobalReducer = createContext();

export const getContext = () => {
  return useContext(GlobalReducer);
};

const defaultState = { cart: [], loading: false };

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({
      type: DISPLAY_ITEMS,
      payload: {
        cart,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const globalValues = {
    state,
    dispatch,
    totalAmount,
    totalCost,
  };

  return (
    <GlobalReducer.Provider value={globalValues}>
      {children}
    </GlobalReducer.Provider>
  );
};

export default Context;
