// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { getContext } from './CONTROL/Context';

function App() {
  const { state } = getContext();

  if (state.loading) {
    return (
      <main>
        <div className='loading' style={{ marginTop: '10rem' }}></div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
