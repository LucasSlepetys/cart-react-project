import { getContext } from './CONTROL/Context';
import CartItem from './CartItem';
import { CLEAR_CART } from './CONTROL/actions';

const CartContainer = () => {
  const { state, dispatch, totalCost } = getContext();
  const cartArray = [...state.cart];

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${totalCost}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
