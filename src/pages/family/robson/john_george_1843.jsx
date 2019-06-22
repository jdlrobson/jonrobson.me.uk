import React from 'react'
import Layout from "../../../components/Layout";
import snippet from 'raw-loader!../../../../jonrobson.me.uk.wiki/robson_john_george_1843.md';
import marked from '../../../marked';

export default ( props ) => (
  <Layout {...props}>
    <h1>The Robson's</h1>
    <div dangerouslySetInnerHTML={marked(snippet)} />
  </Layout>
);
    /*
    View Record Maud Lloyd abt 1877 Shelton, Staffordshire, England Servant Aberavon Glamorgan
    View Record John G Robson abt 1843 Middlesbrough, Yorkshire, England Head Aberavon Glamorgan
    View Record Martha J Robson abt 1843 Cockfield, Durham, England Wife Aberavon Glamorgan
    View Record Mary J Robson abt 1876 Darlington, Durham, England Daughter Aberavon Glamorgan 
    */




