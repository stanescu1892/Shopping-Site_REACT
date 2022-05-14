import "./CheckoutItem.scss";

function CheckoutItem({ cartItem, onRemoveClick }) {
  const { name, imageUrl, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {/* <div className="arrow"> &#10094; </div> */}
        <div className="value"> 1 </div>
        {/* <div className="arrow"> &#10095; </div> */}
      </span>
      <span className="price">{price}$ </span>
      <button className="remove-button" onClick={onRemoveClick}> &#10005; </button>
    </div>
  );
}

export default CheckoutItem;
