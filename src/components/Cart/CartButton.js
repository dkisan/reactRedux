import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartactions } from '../store/cartslice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const noofItem = useSelector(state => state.cart.noofItem)
  const cartHandler = () => {
    dispatch(cartactions.cartToggle())
  }

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{noofItem}</span>
    </button>
  );
};

export default CartButton;
