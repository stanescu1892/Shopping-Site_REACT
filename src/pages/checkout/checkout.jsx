import { useContext } from "react";
import { StoreContext } from "../../context/store";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./checkout.scss";

function CheckoutPage() {
  const store = useContext(StoreContext);
  const cart = store.state.cart;
  let total = 0;
  cart.forEach((e) => {
    total += e.price;
  });

  // const processedCart = cart.map((e) => {});

  // console.log(cart);

  const hanldleRemoveItemFromCart = (i) => {
    const temp = cart.filter((e, index) => index !== i);
    store.dispatch({
      type: "SET_CART",
      payload: temp,
    });
  };

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

      {cart.map((cartItem, index) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          onRemoveClick={() => hanldleRemoveItemFromCart(index)}
        />
      ))}

      <div className="total">
        <span>TOTAL: {total}$</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
