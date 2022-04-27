import { useState } from "react";
import SHOP_DATA from "../../utils/uiConstants";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

function Shop() {
  const [shopData, SetShopData] = useState({
    collections: SHOP_DATA,
  });

  const { collections } = shopData;

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default Shop;
