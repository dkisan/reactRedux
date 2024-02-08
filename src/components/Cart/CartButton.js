import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartactions } from '../store/cartslice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartHandler = () => {
    dispatch(cartactions.cartToggle())
  }

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
