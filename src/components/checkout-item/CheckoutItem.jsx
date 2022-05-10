import "./CheckoutItem.scss";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow"> &#10094; </div>
        <div className="value"> {quantity} </div>
        <div className="arrow"> &#10095; </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button"> &#10005; </div>
    </div>
  );
}

export default CheckoutItem;
