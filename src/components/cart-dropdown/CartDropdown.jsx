import CustomButton from "../customButton/CustomButton";
import "./CartDropDown.scss";
import CartItem from "../cart-item/CartItem";
import { SHOP_DATA } from "../../utils/uiConstants";

function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {SHOP_DATA?.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem.items} />
        ))}
      </div>

      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
}

export default CartDropDown;
