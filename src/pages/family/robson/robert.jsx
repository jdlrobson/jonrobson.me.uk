import React from 'react'
import Layout from "../../../components/Layout"

import marked from '../../../marked';
import snippet from 'raw-loader!../../../../jonrobson.me.uk.wiki/robson_robert.md';

export default ( props ) => (
  <Layout {...props}>
    <h1>The Robson's</h1>
    <h2>Robert Robson</h2>
    <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
