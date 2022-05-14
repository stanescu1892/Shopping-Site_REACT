import { useContext } from "react";
import CustomButton from "../customButton/CustomButton";
import CartItem from "../cart-item/CartItem";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/store";
// import { uid } from "uid";
import { useId } from "react";

import "./CartDropDown.scss";

function CartDropDown() {
  const store = useContext(StoreContext);
  const cart = store.state.cart;
  const idR = useId();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart?.map((cartItem, index) => <CartItem key={idR} item={cartItem} />)
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
