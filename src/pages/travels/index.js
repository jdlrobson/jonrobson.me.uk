import React from "react";
import Thumbnail from "./../../components/Thumbnail";
import map from "./map.png";

import Layout from "./../../components/Layout";

export default props => (
  <Layout {...props}>
    <h1>Travel</h1>
    <p>
      Travelling has always been a big part of my life. I should write about it
      more.
    </p>
    <Thumbnail
      src={map}
      width="300"
      height="218"
      caption="Like many travelers, I maintain a travel map"
      source="https://www.tripadvisor.com/TravelMap-a_uid.2D3DFB1F097C7157C8B2F126998DDAF5"
      sourceName="tripadvisor"
    />
  </Layout>
);
