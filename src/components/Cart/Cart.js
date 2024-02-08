import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((c, i) => {
          return <CartItem item={c} key={i} />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
