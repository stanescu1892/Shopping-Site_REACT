import CustomButton from "../customButton/CustomButton";
import "./CartDropDown.scss";
import CartItem from "../cart-item/CartItem";
import { SHOP_DATA } from "../../utils/uiConstants";
import { Link } from "react-router-dom";

function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {SHOP_DATA.length ? (
          SHOP_DATA?.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem.items} />
          ))
        ) : (
          <span className="emtpy-message"> Your cart is empty</span>
        )}
      </div>

      <Link to="/checkout">
        <CustomButton> GO TO CHECKOUT </CustomButton>
      </Link>
    </div>
  );
}

export default CartDropDown;
