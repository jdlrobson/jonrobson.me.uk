import React from 'react'
import Link from 'gatsby-link'
import Thumbnail from './../../components/Thumbnail'

import herbert from './hunter/herbert.jpg'
import frieda from './gartside/frieda.jpg'
import ian from './robson/ian.jpg'
import joan from './bagg/joan.jpg'

export default () => (
  <div>
    <h1>Family</h1>
    <p>As the digital member of my family all the masses of research collected by my family fell on me and it became my duty to protect it!</p>
    <h2>Hunter's and Gartsides</h2>
    <p>On my mother's side, I come from the Hunter and Gartside clan. Herbert <strong>Hunter</strong> (born 29th November 1912 in Ossett), died two years before I was born in March 1983 of a heart attack. He was a public health inspector.
    <Thumbnail src={herbert}
       small={true} caption="My grandfather, Herbert Hunter. Sadly passed away before I could meet him." float="left" />
    </p>
    <p>
   <Thumbnail small={true}
     src={frieda} caption="My grandmother, Frieda Gartside. I did meet her, but she died when I was young." float="right" />He married Frieda <strong>Gartside</strong> (born 9th February 1926 in Holt). They lived in Macclesfield and later Leicester and Sheringham in Norfolk. Frieda would later die of lung cancer in January 1989 in Ashton-U-Lyme.</p>
    <p>They had four children - Anthony, Kathryn (my mother), Richard and Julia.</p>
    <h2>Robson's and Bagg's</h2>
    <p>I was quite fortunate on my father's side to be gifted two grandparents who have been a big part of my life.
    Joan <strong>Bagg</strong> was born on the 2nd August 1930 to Ivor Bagg (1905) and Violet Franklin. She had one sibling John Bagg.
    <Thumbnail  small={true} float="left"
     src={joan} caption="My grandmother, Joan Bagg. Lost to us in April 2013 but never forgotten!" />
    </p>
    <p>Ian Lyall <strong>Robson</strong> born in 1928 in Port Talbot, married Joan on the 20th February 1954 (which would soon become my birthday).
    <Thumbnail src={ian}
      float="right" small={true}
      caption="My grandfather, Ian Robson. One of these days I will get a photo of him in his youth"/></p>
    <p>They had two children - my father - Andrew Lyall and Sharman Louise, born in Brigend and Swansea respectively.</p>
    <p>Joan sadly passed away in April 2013 with her husband Ian, her brother John, her children and some of her grandchildren by her side. She will always be remembered.</p>
      <p><a href="http://jdlrobson.com/familytree/John%20Robson.html">The Robson family tree</a> can be traced back to John Robson in 1791.</a>.</p>
  </div>
);
