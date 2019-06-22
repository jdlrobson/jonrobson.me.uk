import React from 'react';
import Layout from '../../../components/Layout'
import marked from '../../../marked';
import snippet from 'raw-loader!../../../../jonrobson.me.uk.wiki/oxx_mary_holder.md';

export default ( props ) => (
  <Layout {...props}>
    <h1>The Oxx's</h1>
    <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
