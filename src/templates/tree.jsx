import React from 'react';
import Layout from '../components/Layout';
import marked from '../marked';

export default ( props ) => (
  <Layout {...props}>
    {props.pageContext.title && <h1>{props.pageContext.title}</h1>}
    <div dangerouslySetInnerHTML={marked(props.pageContext.body)} />
  </Layout>
);
