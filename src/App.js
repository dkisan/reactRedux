import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { cartactions } from './components/store/cartslice';

let initial = true

function App() {
  const isCart = useSelector(state => state.cart.show)
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(initial){
      initial = false
      return
    }
    dispatch(cartactions.datasend())
    fetch('https://reactcrud-51072-default-rtdb.firebaseio.com/reduxcart.json',{
      method:'PUT',
      body:JSON.stringify(cart)
    })
    .then(res=>{
      dispatch(cartactions.datasend())
    })
    .catch(err=>{
    dispatch(cartactions.datasend())
    })
  },[cart])

  return (
    <Layout>
      {isCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
