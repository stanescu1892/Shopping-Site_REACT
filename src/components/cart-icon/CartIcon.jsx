import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount, width = "2rem" }) => (
  <div className="cart-icon" onClick={toggleCartHidden} style={{ width }}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

export default CartIcon;
