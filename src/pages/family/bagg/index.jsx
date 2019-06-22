import React from 'react'
import Layout from './../../../components/Layout';
import marked from '../../../marked';
import snippet from 'raw-loader!../../../../jonrobson.me.uk.wiki/bagg.md';

export default ( props ) => (
  <Layout {...props}>
  <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
