import React from 'react'
import {markdown} from 'markdown'

export default function ( text ) {
  return <div dangerouslySetInnerHTML={{__html: markdown.toHTML(text)}}></div>
};
