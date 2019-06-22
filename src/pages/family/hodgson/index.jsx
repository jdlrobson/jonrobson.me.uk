import React from 'react'
import Layout from "../../../components/Layout";
import snippet from 'raw-loader!../../../../jonrobson.me.uk.wiki/hodgson_christopher_hill.md';
import marked from '../../../marked';

export default ( props ) => (
  <Layout {...props}>
    <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
