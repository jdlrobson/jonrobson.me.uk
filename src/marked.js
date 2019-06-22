import marked from 'marked';
const renderer = new marked.Renderer();

const resolveURI = ( href ) => {
  if ( href.indexOf('//') > -1 ) {
    return href;
  } else {
    return `/family/${href.replace(/_/, '/')}`;
  }
};

renderer.link = function (href, title, text) {
  return `<a href="${resolveURI(href)}">${text}</a>`;
};

let leftThumbnail = true;
renderer.image = function (href, title, text) {
  const thumbClass = leftThumbnail ? 'thumb--float-left' : 'thumb--float-right';
  leftThumbnail = !leftThumbnail;
  return `<div class="thumb ${thumbClass} thumb--small">
<img src="${href}" alt="${text}"><span class="thumb__caption">${text}</span></div>`;
};

export default function ( input ) {
    return {__html: marked( input, { gfm: true, renderer: renderer })};
};
