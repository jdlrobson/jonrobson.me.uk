import React from 'react';
import Layout from "../../../components/Layout";
import snippet from 'raw-loader!../../../../jonrobson.me.uk.wiki/spearman_woodhouse.md';
import marked from '../../../marked';

export default ( props ) => (
  <Layout {...props}>
    <h1>The Spearman's</h1>
    <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
