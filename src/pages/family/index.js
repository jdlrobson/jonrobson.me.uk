// In future this file should be made programatically by traversing the wiki directory
import React from "react";
import Layout from "./../../components/Layout";
import marked from '../../marked';

import snippet from 'raw-loader!../../../jonrobson.me.uk.wiki/family.md';
export default props => (
  <Layout {...props}>
    <h1>Family</h1>
    <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
