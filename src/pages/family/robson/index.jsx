import React from 'react'
import Link from 'gatsby-link'
import Thumbnail from './../../../components/Thumbnail'

import intro from 'raw-loader!./intro.md'
import johnr from 'raw-loader!./johnrobson.md'
import snippet from './../../../snippet'

export default () => (
  <div>
    <h1>The Robson's</h1>
    <h2>John Robson</h2>
    {snippet(intro, johnr)}
  </div>
);
