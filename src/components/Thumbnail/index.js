import React from 'react'
import './index.css'
import { BG_COLOR } from './../../const'

const Thumbnail = ( { src, caption, width, height, source, float = 'none', sourceName = 'source' } ) => (
  <div className={"thumb thumb--float-" + float }
    style={ {background: BG_COLOR, float: float } }>
    <img src={src} alt={caption} className="thumb__image"
      width={width} height={height} />
    <span className="thumb__caption">
      {caption}
      { source && (
        <small className="thumb__source"><a href={source}>{sourceName}</a></small>
      ) }
    </span>
  </div>
)

export default Thumbnail
