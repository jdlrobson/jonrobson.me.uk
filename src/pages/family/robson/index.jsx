import React from 'react'
import Link from 'gatsby-link'
import Thumbnail from './../../../components/Thumbnail'

import intro from 'raw-loader!./intro.md'
import johnr from 'raw-loader!./johnrobson.md'
import snippet from './../../../snippet'

export default () => (
  <div>
    <h1>Robson</h1>
    {snippet(intro, johnr)}
  </div>
);
