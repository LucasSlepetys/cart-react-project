import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { getContext } from './CONTROL/Context';
import {
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  REMOVE_ITEM,
} from './CONTROL/actions';

const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = getContext();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={() =>
            dispatch({
              type: REMOVE_ITEM,
              payload: {
                id,
              },
            })
          }
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className='amount-btn'
          onClick={() =>
            dispatch({
              type: INCREASE_AMOUNT,
              payload: {
                id,
              },
            })
          }
        >
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button
          className='amount-btn'
          onClick={() =>
            dispatch({
              type: DECREASE_AMOUNT,
              payload: {
                id,
              },
            })
          }
        >
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
