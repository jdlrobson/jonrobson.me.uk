import React from 'react'
import {markdown} from 'markdown'

export default function () {
  const text = Array.from( arguments ).join( '\n' );
  return <div dangerouslySetInnerHTML={{__html: markdown.toHTML(text)}}></div>
};
