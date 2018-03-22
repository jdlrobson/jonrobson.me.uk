import React from 'react'
import Link from 'gatsby-link'
import Thumbnail from './../components/Thumbnail'
import { ME_IMG_URL } from './../const'

const IndexPage = () => (
  <div>
    <h1>Hey there!</h1>
    <p>Here is one of the two home pages that belong to me, Jon Robson.</p>
    <p>This is more for the right side of my brain, to document the things I create and the thoughts I have.
     Please also take a look at <a href="https://jdlrobson.com">Jon Robson, the web developer</a>.</p>
    <Thumbnail src={ME_IMG_URL}
      caption="Me in 2017, when I had lots of hair."
      sourceName="Myleen Hollero"
      width="382" height="255"
      source="https://commons.wikimedia.org/wiki/File:Robson,_Jon_April_2015.jpg" />
  </div>
)

export default IndexPage
