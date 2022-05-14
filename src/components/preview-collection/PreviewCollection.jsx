import { useContext } from "react";
import CollectionItem from "../collection-item/CollectionItem";
import { StoreContext } from "../../context/store";
import "./PreviewCollection.scss";

const PreviewCollection = ({ title, items }) => {
  const store = useContext(StoreContext);

  console.log(store);

  const addItemToCart = (item) => {
    const tempCart = store.state.cart;
    tempCart.push(item);
    store.dispatch({
      type: "SET_CART",
      payload: tempCart,
    });
  };

  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item } addItem={addItemToCart} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
