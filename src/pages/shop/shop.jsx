// import { useState } from "react";
// import { SHOP_DATA } from "../../utils/uiConstants";
// import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
// import { Route } from "react-router-dom";

function Shop() {
  // console.log(match);

  return (
    <div className="shop-page">
      {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
      <CollectionsOverview />
    </div>
  );
}

export default Shop;
