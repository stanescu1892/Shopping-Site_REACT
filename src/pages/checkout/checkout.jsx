import "./checkout.scss";

import { SHOP_DATA } from "../../utils/uiConstants";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product </span>
        </div>
        <div className="header-block">
          <span> Description </span>
        </div>
        <div className="header-block">
          <span> Quantity </span>
        </div>
        <div className="header-block">
          <span> Price </span>
        </div>
        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>

      {SHOP_DATA.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: </span>
      </div>
    </div>
  );
}

export default CheckoutPage;
