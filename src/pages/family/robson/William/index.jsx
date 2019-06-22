import React from 'react';
import snippet from 'raw-loader!../../../../../jonrobson.me.uk.wiki/robson_william.md';
import marked from '../../../../marked';
import Layout from "../../../../components/Layout";

export default ( props ) => (
  <Layout {...props}>
      <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
