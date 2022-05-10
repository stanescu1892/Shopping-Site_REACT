import "./CollectionsOverview.scss";
import { SHOP_DATA } from "../../utils/uiConstants";
import { useState } from "react";

import PreviewCollection from "../preview-collection/PreviewCollection";

function CollectionsOverview() {
  const [shopData, SetShopData] = useState({
    collections: SHOP_DATA,
  });

  const { collections } = shopData;

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionsOverview;
