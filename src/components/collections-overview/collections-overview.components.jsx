import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...restOfCollectionData }) => (
        <CollectionPreview key={id} {...restOfCollectionData} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

// const mapStateToProps = (state) => {
//   return {
//     collections: selectShopCollections(state),
//   };
// };
export default connect(mapStateToProps)(CollectionsOverview);
