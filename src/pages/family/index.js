import React from 'react'
import Link from 'gatsby-link'
import Thumbnail from './../../components/Thumbnail'

import herbert from './hunter/herbert.jpg'
import frieda from './gartside/frieda.jpg'
import ian from './robson/ian.jpg'
import joan from './bagg/joan.jpg'
import hunterg from 'raw-loader!./huntergartsides.md'
import rb from 'raw-loader!./robsonbaggs.md'
import motivation from 'raw-loader!./motivation.md'
import snippet from './../../snippet'

export default () => (
  <div>
    <h1>Family</h1>
    {snippet(motivation)}
    <Thumbnail src={herbert} width="137" height="200"
       small={true} caption="My grandfather, Herbert Hunter. Sadly passed away before I could meet him." float="left" />
   <Thumbnail small={true} width="144" height="200"
     src={frieda} caption="My grandmother, Frieda Gartside. I did meet her, but she died when I was young." float="right" />
    {snippet(hunterg)}
    <Thumbnail  small={true} float="left"
      width="200" height="266"
     src={joan} caption="My grandmother, Joan Bagg. Lost to us in April 2013 but never forgotten!" />
    <Thumbnail src={ian}
      float="right" small={true}
      width="200" height="215"
      caption="My grandfather, Ian Robson. One of these days I will get a photo of him in his youth"/>
    {snippet(rb)}
  </div>
);
