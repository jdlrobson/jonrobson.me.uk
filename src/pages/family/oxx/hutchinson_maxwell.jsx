import React from 'react';
import Layout from '../../../components/Layout';
import snippet from 'raw-loader!../../../../jonrobson.me.uk.wiki/oxx_hutchinson_maxwell.md';
import marked from '../../../marked';

export default ( props ) => (
  <Layout {...props}>
    <h1>The Oxx's</h1>
    <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
