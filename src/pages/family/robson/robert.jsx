import React from 'react'

import robert from 'raw-loader!./robert.md'
import snippet from './../../../snippet'

export default () => (
  <div>
    <h1>The Robson's</h1>
    <h2>Robert Robson</h2>
    <p>Son of <a href="/family/robson">John Robson</a> and <strong>Jane Watson</strong>.</p>
    {snippet(robert)}
  </div>
);
