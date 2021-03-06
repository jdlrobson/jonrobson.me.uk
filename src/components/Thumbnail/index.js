import React from "react";
import "./index.css";

const Thumbnail = ({
  src,
  caption,
  width,
  height,
  source,
  large = false,
  small = false,
  float = "none",
  sourceName = "source"
}) => (
  <div
    className={
      "thumb thumb--float-" +
      float +
      " thumb--" +
      (small ? "small" : large ? "lrg" : "reg")
    }
  >
    <img
      src={src}
      alt={caption}
      className="thumb__image"
      width={width}
      height={height}
    />
    <span className="thumb__caption">
      {caption}
      {source && (
        <small className="thumb__source">
          Source: <a href={source}>{sourceName}</a>
        </small>
      )}
    </span>
  </div>
);

export default Thumbnail;
