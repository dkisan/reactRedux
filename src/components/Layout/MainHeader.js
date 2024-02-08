import { useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const issending = useSelector(state => state.cart.issending)

  return (
    <>
      {issending && <div className={classes.notification}>
        <h4>Sending Cart Data....</h4>
      </div>}
      <header className={classes.header}>
        <h1>ReduxCart</h1>
        <nav>
          <ul>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
